import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { ServiciosComponent } from './servicios/servicios.component';
<<<<<<< HEAD
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'ayuda',component: AyudaComponent},
  {path: 'productos', component: ProductosComponent },
  {path: 'servicios',component: ServiciosComponent},  
  {path: 'contacto',component: ContactoComponent},
=======
import { AgendaComponent } from './agenda/agenda.component';
import { AdminComponent } from './admin/admin.component';
import { CitasComponent } from './citas/citas.component';


const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'productos',component: ProductosComponent},
  {path: 'servicios',component: ServiciosComponent},
  {path: 'agenda/:id',component: AgendaComponent},
  {path: 'citas',component: CitasComponent},
  {path: 'admin',component: AdminComponent},
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'loginPhone', loadChildren: () => import('./auth/login-phone/login-phone.module').then(m => m.LoginPhoneModule) },
>>>>>>> omar
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
