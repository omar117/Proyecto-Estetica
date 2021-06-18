import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AuthService],
})
export class RegisterComponent implements OnInit {
  
  error:boolean = false;
  mensajeError:string = "";
  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    password: new FormControl(''),
    check: new FormControl(''),
  })
  constructor(private authSvc:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  async onRegister(){
    const {name,email,phone,password,check} = this.registerForm.value;
    name.trim();
    email.trim();
    phone.trim();
    password.trim();
    check.trim();
    if(name != '' && email != ''  && phone != ''  && password != ''  && check != ''){
      if(password == check){
        try{ 
          const user = await this.authSvc.register(email,password);
          if(user){
            this.router.navigate(['/home']);
          }
        }catch(error){
          console.log(error);
        }
      }else{
        this.mensajeError = "Contraseñas no coinciden.";
        this.error = true;
      }
     
    }
    else{
      //Error
      this.mensajeError = "Verifica tus datos, puede que falte uno.";
      this.error = true;
    }
    
  }

}
