import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeoresRoutingModule } from './heores-routing.module';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroeTarjetaComponent } from './heroe-tarjeta/heroe-tarjeta.component';
import { HeroeFormComponent } from './heroe-form/heroe-form.component';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroeTarjetaComponent,
    HeroeFormComponent
  ],
  imports: [
    CommonModule,
    HeoresRoutingModule
  ]
})
export class HeoresModule { }
