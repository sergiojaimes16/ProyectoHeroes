
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionComponent } from './components/informacion/informacion.component';
import { LoginComponent } from './components/login/login.component';
import { EjemplosPipesComponent } from './ejemplos-pipes/ejemplos-pipes.component';
import { FormularioNgmodelComponent } from './formularios/formulario-ngmodel/formulario-ngmodel.component';
import { FormularioReactivosComponent } from './formularios/formulario-reactivos/formulario-reactivos.component';
import { HeroeFormComponent } from './heores/heroe-form/heroe-form.component';

const routes: Routes = [
  {path: 'pipes', component: EjemplosPipesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'form/ngmodel', component: FormularioNgmodelComponent},
  {path: 'form/reactivo', component: FormularioReactivosComponent},
  {path: 'informacion', component: InformacionComponent},
  {path: 'heroes', component: HeroeFormComponent},
  {path: '**', pathMatch:'full', redirectTo: "pipes"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
