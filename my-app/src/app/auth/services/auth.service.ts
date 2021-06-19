import { AngularFireAuth } from '@angular/fire/auth';
import {first} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import firebase from 'firebase/app';


@Injectable()
export class AuthService {
  
  constructor(public afAuth: AngularFireAuth) { }

  async login(email:string,password:string){
    try{
      const result = await this.afAuth.signInWithEmailAndPassword(email,password);
      console.log(result);
      return result;
    }
    catch(error){
      console.log(error);
    }
    return null;
   
  }


  async register(email:string,password:string){
    try{
      const result = await this.afAuth.createUserWithEmailAndPassword(email,password);
      return result;
    }catch(error){console.log(error)}
    return null;
  }

  async logout(){
    try{
      await this.afAuth.signOut();
    }catch(error){console.log(error)}
    
  }
  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
