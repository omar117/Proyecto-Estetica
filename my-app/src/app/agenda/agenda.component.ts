import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
  providers:[AuthService],
})
export class AgendaComponent implements OnInit {

  constructor(private authSvc: AuthService,private router:Router) { }

  async ngOnInit(){
    try{
      const user = await this.authSvc.getCurrentUser();
      if(!user){
        this.router.navigate(['/login']);
      }
    }catch(error){
      console.log(error);
    }
  }

}
