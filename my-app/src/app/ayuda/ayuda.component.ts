import { Component, OnInit } from '@angular/core';
import { LectorService } from '../lector.service';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css']
})
export class AyudaComponent implements OnInit {

  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(this.fecha()), 1000);
  });

  fecha(): string {
    var hoy = new Date();
    var hora = hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds();
    console.log(hora);
    return hora;
  }

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

}
