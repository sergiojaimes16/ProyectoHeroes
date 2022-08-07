import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  nombreApellido: string = "([a-zA-Z]+) ([a-zA-Z]+)";
  correo:string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$";
  contrasena: string = "^.{4,12}$";
  form: FormGroup = new FormGroup({});
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
   
  }

  buildForm(){
    this.form = this.formBuilder.group({
      nombres: ['', [Validators.required, Validators.pattern(this.nombreApellido)]],
      correo: ['', [Validators.required, Validators.pattern(this.correo)]],
      password: ['', [Validators.required, Validators.pattern(this.contrasena)]],
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
