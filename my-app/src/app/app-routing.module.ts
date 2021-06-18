import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'productos',component: ProductosComponent},
  {path: 'servicios',component: ServiciosComponent},
  {path: 'agenda',component: AgendaComponent},
  {path: 'admin',component: AdminComponent},
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'loginPhone', loadChildren: () => import('./auth/login-phone/login-phone.module').then(m => m.LoginPhoneModule) },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
