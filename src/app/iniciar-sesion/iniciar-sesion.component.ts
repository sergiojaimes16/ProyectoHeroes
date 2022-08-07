import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  terminarpunto: string = "/^[a-zA=Z]+\\+.{.}$/"
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
   
  }

  buildForm(){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  campoNoValido(campo:string){
    return this.form.get(campo)?.invalid && this.form.get(campo)?.touched;
  }
  

  guardar(){
    console.log(this.form.value);
    this.form.reset();
  }

  

}
