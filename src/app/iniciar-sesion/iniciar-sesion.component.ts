import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPersona } from '../interfaces/persona.interface';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  
  form: FormGroup = new FormGroup({});
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  terminarpunto: string = "/^[a-zA=Z]+\\+.{.}$/"
  constructor(private formBuilder:FormBuilder,
              private _serviceLogin: LoginService) { }

  ngOnInit(): void {
    this.buildForm();
   
  }

  buildForm(){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      contrasena: ['', [Validators.required, Validators.minLength(8), this.validarContrasena]],
    });
  }

  login(){
    const usuario:IPersona = this.form.value;
    this._serviceLogin.login(usuario);

  }

  campoNoValido(campo:string){
    return this.form.get(campo)?.invalid && this.form.get(campo)?.touched;
  }

  validarContrasena(control: AbstractControl){
    const contrasena:string = control.value || '';
    let error = null;
    if(!contrasena.includes('.')){
      error = { pesos:'Es requerido el punto'}
    }
   
    return error;
  }
  

  guardar(){
    console.log(this.form.value);
    this.form.reset();
  }

  

}
