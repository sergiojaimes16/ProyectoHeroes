import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  nombreUsuario:string = "";
  constructor(private _serviceLogin:LoginService) { }

  ngOnInit(): void {
    this._serviceLogin.getUsuario$().subscribe(usuario => {
      this.nombreUsuario = `${usuario.email} ${usuario.contrasena}`;
      console.log(this.nombreUsuario);
    })
  }

  ngOnDestroy(){
    this._serviceLogin.usuario$.unsubscribe();
  }

  logout(){
    this._serviceLogin.usuario$.unsubscribe();
    this._serviceLogin.usuario$ = new Subject();
    this.nombreUsuario ="";
  }

}
