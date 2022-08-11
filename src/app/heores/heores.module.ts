import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeoresRoutingModule } from './heores-routing.module';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroeTarjetaComponent } from './heroe-tarjeta/heroe-tarjeta.component';
import { HeroeFormComponent } from './heroe-form/heroe-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroeTarjetaComponent,
    HeroeFormComponent
  ],
  imports: [
    CommonModule,
    HeoresRoutingModule,
    ReactiveFormsModule
  ],
  exports : [
    HeroeFormComponent
  ]
})
export class HeoresModule { }
