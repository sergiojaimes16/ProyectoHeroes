import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-heroe-form',
  templateUrl: './heroe-form.component.html',
  styleUrls: ['./heroe-form.component.css']
})
export class HeroeFormComponent implements OnInit {

  imagenes: string[] = ["A-64.png", "aquaman.png", "batman.png", "daredevil.png", "dc-logo.png", "hulk.png",
                        "linterna-verde.png", "marvel-logo.png", "spiderman.png", "wolverine.png"];

  form: FormGroup = new FormGroup({});                        
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  buildForm(){
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagen: [''],
      aparicion: ['', Validators.required],
      casa: [''],
    })
  }

}
