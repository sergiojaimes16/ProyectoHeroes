import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-formulario-reactivos',
  templateUrl: './formulario-reactivos.component.html',
  styleUrls: ['./formulario-reactivos.component.css']
})
export class FormularioReactivosComponent implements OnInit {

  paises: any[] = [];
  form: FormGroup = new FormGroup({});
  
  constructor(private formBuilder:FormBuilder,
              private _servicePais: PaisService) { }

  ngOnInit(): void {
    this.buildForm();
    this.getPaises();
  }

  getPaises(){
    this._servicePais.getPaises().subscribe(data => {
      this.paises = data;  
    });
  }

  buildForm(){
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required, this.validarContrasena],
      pais: [''],
      direccion: this.formBuilder.group({
        calle: ['', Validators.required],
        avenida: ['', Validators.required]
      })
    });
  }

  validarContrasena(control: AbstractControl){
    const contrasena:string = control.value || '';
    let error = null;
    if(!contrasena.includes('$')){
      error = { pesos:'Es requerido el signo pesos'}
    }
    if(!parseFloat(contrasena[0])){
      error = { ...error, number:'Debe empezar con un número'}
    }

    return error;
  }

  guardar(){
  console.log(this.form)    
  if(this.form.invalid){
    this.form.markAllAsTouched();
    return;
  }
  }

  resetForm(){
    this.form.reset();
  }

  get usuarioNoValido(){
    return this.nombre?.errors?.['required'] && this.nombre.touched;
  };

  getError(controlName:string){
    let error = null;
    const control = this.form.get(controlName);
    if (control?.errors != null){
      error = control?.errors;
    }
    return error;
  }

  get nombre(): AbstractControl | null { return this.form.get('nombre')};
  get apellido(): AbstractControl | null { return this.form.get('apellido')};
  




}
