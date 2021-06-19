import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPhoneRoutingModule } from './login-phone-routing.module';
import { LoginPhoneComponent } from './login-phone.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginPhoneComponent
  ],
  imports: [
    CommonModule,
    LoginPhoneRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginPhoneModule { }
