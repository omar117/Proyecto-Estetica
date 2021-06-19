import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';


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

}
