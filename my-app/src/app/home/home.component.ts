<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { LectorService } from '../lector.service';
=======
import { Component, OnInit} from '@angular/core';
>>>>>>> omar

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

<<<<<<< HEAD
  constructor(private _servicio: LectorService) { }

  ngOnInit(): void {
    var text1;
    let parrafo1 = document.getElementById("msg")?.textContent;
    text1 = parrafo1;
    this.enviar(text1);
  }

  public enviar(cadena: any): void {
    this._servicio.setCadena(cadena);
  }
=======
})
export class HomeComponent{

>>>>>>> omar

}
