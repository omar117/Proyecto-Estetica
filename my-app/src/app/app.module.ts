import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiciosComponent } from './servicios/servicios.component';
import { ProductosComponent } from './productos/productos.component';
import { ReactiveFormsModule} from '@angular/forms';

import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import { environment } from './../environments/environment';
import { AgendaComponent } from './agenda/agenda.component';
import { AdminComponent } from './admin/admin.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { CitasComponent } from './citas/citas.component';
import { LetrasPipe } from './letras.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ServiciosComponent,
    ProductosComponent,
    AgendaComponent,
    AdminComponent,
    CitasComponent,
    LetrasPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    NgxQRCodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
