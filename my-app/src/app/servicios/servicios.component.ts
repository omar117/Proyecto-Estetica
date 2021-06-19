import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import {NgxQrcodeElementTypes,NgxQrcodeErrorCorrectionLevels} from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  template:' <app-agenda [ejemplo]="parentMessage"></app-agenda>',
  styleUrls: ['./servicios.component.css'],
  providers:[AuthService],
})
export class ServiciosComponent implements OnInit {

  public user$: Observable<any> = this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService,private router:Router) { }

  servicio:string = "";

  ngOnInit(): void {
  }

  async agendar(nombreServicio:any){
    try{
      const user = await this.authSvc.getCurrentUser();
      if(user){
        //Mandar a citas
        this.servicio = nombreServicio;  
        this.router.navigate(['/agenda',this.servicio]);
        //console.log("Logeado");
      }
      else{
        this.router.navigate(['/login']);
        //console.log("No logeado");
      }
    }catch(error){
      console.log(error);
    }
  }

  ////////QR
  indice:number = this.getRandomArbitrary(0,3);
  titulo = datos[this.indice].titulo;
  url =  datos[this.indice].url;
  profile = 'routeToMyProfile';
  elementType = NgxQrcodeElementTypes.URL;
  errorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = this.url + this.profile;

  getRandomArbitrary(min:number, max:number):number{
    let num = Math.floor(Math.random()*(max-min))+min;
    console.log(num);
    return num;
  }
  
}

let datos =  [
  {
    titulo: 'Karessi',
    url: 'https://www.karessi.org/product-page/mini-tibur%C3%B3n'
  },
  {
    titulo: 'Luvi',
    url: 'https://www.luvibelleza.com/?gclid=CjwKCAjwiLGGBhAqEiwAgq3q_k2AVYwgIbN8phZbI_9xKPqN1iIHqEiL450U8clo3k26fcv39J7s0BoCLtwQAvD_BwE'
  },
  {
    titulo: 'La belleza',
    url: 'https://www.labelleza.com.mx/'
  }
]
