import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';

const routes: Routes = [
  {path:"login", component : HomeComponent},
  {path:"sesion", component : InicioSesionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
