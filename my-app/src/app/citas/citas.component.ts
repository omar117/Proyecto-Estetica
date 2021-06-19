import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { ServiceService } from '../auth/services/service.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css'],
  providers:[AuthService],
})


export class CitasComponent implements OnInit {

  constructor(private authSvc: AuthService,private router:Router,private Servicio:ServiceService) { }

  uid:any;
  token:any;
  datos:any;
  /*
  datos:any = {
    "-McYLMPkZVuM3nd5jUSU": [
        {
            "_fecha": "2021-06-27",
            "_name": "Desrizados"
        },
        {
            "_fecha": "2021-06-29",
            "_name": "Recogido"
        },
        {
            "_fecha": "2021-06-22",
            "_name": "Peinado de Fiesta"
        }
    ],
    "-McYUailXuDG1_0I1p80": [
        {
            "_fecha": "2021-06-18",
            "_name": "Tintes"
        },
        {
            "_fecha": "2021-06-22",
            "_name": "Desrizados"
        }
    ]
  };*/
 
  async ngOnInit(){    
    try{
      const user = await this.authSvc.getCurrentUser();
      if(user){
        this.uid = user.uid;
        await this.authSvc.afAuth.idToken.pipe(first()).toPromise().then((payload) => {
          if (payload) {
            this.token = payload
          }
        }).catch((e) => console.log(`Error ${e}`))

        const urapi = `http://localhost:3080/recuperar/`+this.uid+'/'+this.token;
        console.log(urapi);

        await this.Servicio.getJSON(urapi).subscribe((res: any) => {
          this.datos = res;
          console.log("Hola: ",this.datos);
        });
        console.log("Hola 2:",this.datos);
  
      }
      else{
        this.router.navigate(['/login']);
      }
    }catch(error){
      console.log(error);
    }
  }

  subClave:any;
  getVal(clave:any){
    this.subClave = clave;
    console.log(clave);
  }

}
