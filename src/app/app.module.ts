import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { EjemplosPipesComponent } from './ejemplos-pipes/ejemplos-pipes.component';
import { RouterModule } from '@angular/router';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { LimitStringPipe } from './pipes/limit-string.pipe';
import { CapitaizarPipe } from './pipes/capitaizar.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
import { FormularioNgmodelComponent } from './formularios/formulario-ngmodel/formulario-ngmodel.component';
import { FormularioReactivosComponent } from './formularios/formulario-reactivos/formulario-reactivos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistrarComponent } from './registrar/registrar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    NavbarComponent,
    EjemplosPipesComponent,
    MayusculasPipe,
    LimitStringPipe,
    CapitaizarPipe,
    ContrasenaPipe,
    FormularioNgmodelComponent,
    FormularioReactivosComponent,
    IniciarSesionComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
