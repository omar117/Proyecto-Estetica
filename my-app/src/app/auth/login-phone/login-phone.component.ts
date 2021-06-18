import { Component, OnInit } from '@angular/core';
import { SETTINGS as AUTH_SETTINGS } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login-phone',
  templateUrl: './login-phone.component.html',
  styleUrls: ['./login-phone.component.css'],
  providers:[{ provide: AUTH_SETTINGS, useValue: { appVerificationDisabledForTesting: true } },],
})
export class LoginPhoneComponent implements OnInit {

  constructor(private auth:AuthService){}
  ngOnInit(){
   
  }
 
}
