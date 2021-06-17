import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
  providers:[AuthService],
})
export class ServiciosComponent implements OnInit {

  public user$: Observable<any> = this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  async agendar(){
    try{
      const user = await this.authSvc.getCurrentUser();
      if(user){
        //Mandar a citas
        this.router.navigate(['/agenda']);
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
