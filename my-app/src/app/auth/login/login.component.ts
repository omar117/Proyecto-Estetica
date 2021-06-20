import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import firebase from 'firebase/app';
import { WindowService } from '../services/window.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService],
})

export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  windowRef: any;
  otp:any;
  deshabilitarButton: boolean = false;
  phone:string = "";
  error:boolean = false;
  mensajeError:string = "";
  
  constructor(private authSvc: AuthService, private router:Router,private win:WindowService) { }

  ngOnInit(){
    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container",{
      'size': 'normal',
      'callback': (reponse:any) =>{
      }
    });
    this.windowRef.recaptchaVerifier.render();
  }

  async onLogin(){
    const{email,password} = this.loginForm.value;
    try{
      const user = await this.authSvc.login(email,password);
      if(user){
        this.router.navigate(['/home']);
      }

    }catch(error){
      console.log(error);
    }  
  }

 
  sendLoginCode() {
    this.phone.trim();
    if(this.phone != '' && this.phone != ' '){
      const appVerifier = this.windowRef.recaptchaVerifier;
      firebase.auth().signInWithPhoneNumber(this.phone, appVerifier)
            .then(result => {
                console.log(result);
                this.deshabilitarButton = true;
                this.windowRef.confirmationResult = result;
            })
            .catch( error => console.log(error) );
    }
    else{
      this.error = true;
      this.mensajeError = "Ingrese numero";
    }
    
  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
                  .confirm(this.otp)
                  .then((result:any) => this.router.navigate(['/home']))
                  .catch( (error:any) => console.log(error, "Incorrect code entered?"));
  }
  //.then((result:any) => console.log(result))
}
