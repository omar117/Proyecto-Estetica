import { Component, OnInit } from '@angular/core';
import { LectorService } from '../lector.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _servicio: LectorService) { }

  ngOnInit(): void {
  }

  public habla(): void {
    this._servicio.speak();
  }
  public silencio(): void {
    this._servicio.stop();
  }
}
