<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { LectorService } from '../lector.service';
=======
import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
>>>>>>> omar

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[AuthService],
})
<<<<<<< HEAD
export class NavbarComponent implements OnInit {

  constructor(private _servicio: LectorService) { }

  ngOnInit(): void {
=======
export class NavbarComponent {
  
  public user$: Observable<any> = this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService, private router:Router) { }
  
  async onLogout(){
    try{
      await this.authSvc.logout();
      this.router.navigate(['/home']);
    }catch(error){console.log(error)}
    this.authSvc.logout();
>>>>>>> omar
  }

  public habla(): void {
    this._servicio.speak();
  }
  public silencio(): void {
    this._servicio.stop();
  }
}
