import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'ayuda',component: AyudaComponent},
  {path: 'productos', component: ProductosComponent },
  {path: 'servicios',component: ServiciosComponent},  
  {path: 'contacto',component: ContactoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
