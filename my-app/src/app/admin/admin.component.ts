import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers:[AuthService],
})
export class AdminComponent implements OnInit {

  constructor(private authSvc: AuthService,private router:Router) { }

  async ngOnInit(){
    try{
      const user = await this.authSvc.getCurrentUser();
      if(user){
        if(user.email != "admin@gmail.com"){
          this.router.navigate(['/home']);
        }
      }
      else{
        this.router.navigate(['/login']);
      }
    }catch(error){
      console.log(error);
    }
  }

}
