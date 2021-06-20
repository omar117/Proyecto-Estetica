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
import { environment } from 'src/environments/environment';
import { AgendaComponent } from './agenda/agenda.component';
import { AdminComponent } from './admin/admin.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { CitasComponent } from './citas/citas.component';
import { LetrasPipe } from './letras.pipe';


import { ServiceWorkerModule } from '@angular/service-worker';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AyudaComponent } from './ayuda/ayuda.component';

//servicio de lector
import{ LectorService } from './lector.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ServiciosComponent,
    ProductosComponent,
    FooterComponent,
    ContactoComponent,
    AyudaComponent,
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
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    FontAwesomeModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    NgxQRCodeModule,
  ],
  providers: [
    LectorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
