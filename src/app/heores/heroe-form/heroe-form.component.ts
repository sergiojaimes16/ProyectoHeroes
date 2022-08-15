import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IHeroe } from 'src/app/interfaces/heroe.interface';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe-form',
  templateUrl: './heroe-form.component.html',
  styleUrls: ['./heroe-form.component.css']
})
export class HeroeFormComponent implements OnInit {

  

  nombre: string = "([a-zA-Z]+)";
  descripcion: string = "^.{8,}$";
  aparicion: string = "^[^]+$";
  imagen: string = "^[^]+$";
  casa: string = "^[^]+$";
  imagenes: any[] = [
    {url: "assets/img/A-64.png"},
    {url: "assets/img/aquaman.png"},
    {url: "assets/img/batman.png"},
    {url: "assets/img/daredevil.png"},
    {url: "assets/img/dc-logo.png"},
    {url: "assets/img/hulk.png"},
    {url: "assets/img/linterna-verde.png"},
    {url: "assets/img/marvel-logo.png"},
    {url: "assets/img/spiderman.png"},
    {url: "assets/img/wolverine.png"},
  ];

  form: FormGroup = new FormGroup({});                        
  constructor(private formBuilder:FormBuilder,
              private heroesServices: HeroesService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern(this.nombre)]],
      descripcion: ['', [Validators.required, Validators.pattern(this.descripcion)]],
      imagen: ['', [Validators.required, Validators.pattern(this.imagen)]],
      aparicion: ['', [Validators.required, Validators.pattern(this.aparicion)]],
      casa: ['', [Validators.required, Validators.pattern(this.casa)]],
    })
  }

  campoNoValido(campo:string){
    return this.form.get(campo)?.invalid && this.form.get(campo)?.touched;
  }

  guardar(){
    this.heroesServices.agregarHeroe(this.form.value);
    this.form.reset();
  }

}
