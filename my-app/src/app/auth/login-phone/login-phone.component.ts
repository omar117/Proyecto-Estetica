import {Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import firebase from 'firebase/app';
import { environment } from 'src/environments/environment';
import { WindowService } from '../services/window.service';

@Component({
  selector: 'app-login-phone',
  templateUrl: './login-phone.component.html',
  styleUrls: ['./login-phone.component.css'],
  providers:[AuthService]
})


export class LoginPhoneComponent implements OnInit {

  windowRef: any;
  otp:any;


  constructor(private auth:AuthService, private win:WindowService){ }

  ngOnInit(){
    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container",{
      'size': 'normal',
      'callback': (reponse:any) =>{
      }
    });
    this.windowRef.recaptchaVerifier.render();
  } 
 
  sendOTP(){
    this.auth.afAuth.signInWithPhoneNumber("+524492015649",this.windowRef.recaptchaVerifier).then((confirmationResult)=>{
      this.windowRef.confirmationResult = confirmationResult;
    })
  }
  
  sendLoginCode() {

    const appVerifier = this.windowRef.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber("+524492015649", appVerifier)
            .then(result => {
                console.log(result);
                this.windowRef.confirmationResult = result;
            })
            .catch( error => console.log(error) );
  }

  verifyOTP(){
    this.windowRef.confirmationResult.confirm(this.otp)
    .then((userCredentials:any) => console.log(userCredentials));
  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
                  .confirm(this.otp)
                  .then((result:any) => console.log(result))
                  .catch( (error:any) => console.log(error, "Incorrect code entered?"));
  }
}
