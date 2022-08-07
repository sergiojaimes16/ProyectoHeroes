
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EjemplosPipesComponent } from './ejemplos-pipes/ejemplos-pipes.component';
import { FormularioNgmodelComponent } from './formularios/formulario-ngmodel/formulario-ngmodel.component';
import { FormularioReactivosComponent } from './formularios/formulario-reactivos/formulario-reactivos.component';

const routes: Routes = [
  {path: 'pipes', component: EjemplosPipesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'form/ngmodel', component: FormularioNgmodelComponent},
  {path: 'form/reactivo', component: FormularioReactivosComponent},
  {path: '**', pathMatch:'full', redirectTo: "pipes"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
