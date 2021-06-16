import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import {InicioSesionComponent} from './inicio-sesion/inicio-sesion.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'productos',component: ProductosComponent},
  {path: 'servicios',component: ServiciosComponent},  
  {path: 'inicio_sesion',component: InicioSesionComponent},  
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
