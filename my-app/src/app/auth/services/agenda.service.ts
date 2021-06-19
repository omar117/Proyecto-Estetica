import { Injectable } from '@angular/core';
import { CitaModel } from 'src/app/models/cita.model';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class AgendaService {

 
  private $citas:BehaviorSubject<CitaModel[]> = new BehaviorSubject<CitaModel[]>([]);//Igual a arreglo vacio
  _citas:Observable<CitaModel[]> = this.$citas.asObservable();//_persons sera un observable del array

  private $cita:BehaviorSubject<CitaModel|null> = new BehaviorSubject<CitaModel|null>(null);//igual a nulo
  _cita:Observable<CitaModel|null> = this.$cita.asObservable();//_person sera un observable de un solo objeto

  

  constructor() {
    let data = localStorage.getItem('data'); //recuperamos datos del localStorage
    if(data){
      this.$citas.next(JSON.parse(data));//next nos permite mandar el cambio a todos quien este subscrito a nuestro observable
    }
  }

  fnAddPerson(cita:CitaModel):void{
    let aux:CitaModel[] = this.$citas.getValue();
    aux.push(cita);
    this.$citas.next(aux);/*mandamos actualizacion a todos los subscritos*/
    this.fnSaveLocalStorage();
  }


  fnSaveLocalStorage(){
    let aux:CitaModel[] = this.$citas.getValue();
    let strAux:string = JSON.stringify(aux);
    localStorage.setItem('data',strAux)
  }

  fnLoadPerson(cita:CitaModel):void{
    this.$cita.next(cita);
  }

  fnEditPerson(cita:CitaModel):void{

    console.log(cita)
    let aux:CitaModel[] = this.$citas.getValue();
    let indexDelete:number = -1;
    aux.forEach((savePerson,index)=>{})

    if(indexDelete!=-1){
      aux[indexDelete] = cita;
    }
    this.$citas.next(aux)
    this.fnSaveLocalStorage();
  }

  fnResetLoadPerson():void{
    this.$cita.next(null);
  }

  fnDeletePerson(cita:CitaModel):void{
    let aux:CitaModel[] = this.$citas.getValue();
    let indexDelete:number = aux.indexOf(cita);
    if(indexDelete!=-1){//Si es difeerente de -1 encontro el objeto en el array
      /*Las siguientes lineas de codigo son para validar si el usuario que vamos
      a eliminar ESTA en este momento en EDICION, porque de ser asi, debemos
      borrar sus datos del formulario, no seria una buena practica, proceder
      a la eliminacion dejando los datos ahi, porque alguien podria pensar que
      ese usuario sigue existiendo y ya lo vamos a borrar*/
      aux.splice(indexDelete,1);//borramos el registro
    }
    this.$citas.next(aux)
    this.fnSaveLocalStorage();
  }

}
