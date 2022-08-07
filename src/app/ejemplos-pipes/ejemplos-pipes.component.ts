import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplos-pipes',
  templateUrl: './ejemplos-pipes.component.html',
  styleUrls: ['./ejemplos-pipes.component.css']
})
export class EjemplosPipesComponent implements OnInit {

  nombre: string = "Sergio";
  PI:number = Math.PI;
  porcentaje: number = 0.25;
  salario:number = 1234.5;
  fecha:Date = new Date();
  limite: string = "Sergio Jaimes"
  nombre2:string = "sErGiO anDRes JaIMeS";
  texto:string = "contraseña";
  isShow:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  mostrar(){
    this.isShow = !this.isShow
  }

}
