import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeoresRoutingModule } from './heores-routing.module';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroeTarjetaComponent } from './heroe-tarjeta/heroe-tarjeta.component';
import { HeroeFormComponent } from './heroe-form/heroe-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroeComponent } from './heroe/heroe.component';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroeTarjetaComponent,
    HeroeFormComponent,
    HeroeComponent
  ],
  imports: [
    CommonModule,
    HeoresRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports : [
    HeroeFormComponent,
    HeroeComponent
  ]
})
export class HeoresModule { }
