import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import * as moment from 'moment';

import { Observable } from 'rxjs';
import { CitaModel } from 'src/app/models/cita.model';
import { AgendaService } from '../auth/services/agenda.service';
import { Subscription } from 'rxjs';
import {first} from 'rxjs/operators';
import { ControlContainer } from '@angular/forms';
import { ServiceService } from '../auth/services/service.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
  providers:[AuthService],
})
export class AgendaComponent implements OnInit {

  week: any = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
  ];

  meses: any = {
    "01": "Enero",
    "02": "Febrero",
    "03": "Marzo",
    "04": "Abril",
    "05": "Mayo",
    "06": "Junio",
    "07": "Julio",
    "08": "Agosto",
    "09": "Septiembre",
    "10": "Octubre",
    "11": "Noviembre",
    "12": "Diciembre"
  }
  monthSelect!: any[];
  dateSelect: any;
  dateValue: any;
  num_mes:number = 0;
  num_year:number = 0;
  servicio:any;
  
  _citas:Observable<CitaModel[]>;
  constructor(private authSvc: AuthService,private router:Router,private agendaService:AgendaService, private activatedRoute:ActivatedRoute,private Servicio: ServiceService) { 
    this._citas = this.agendaService._citas;
  }

  async ngOnInit(){
    this.servicio = this.activatedRoute.snapshot.paramMap.get('id');
    this.fnSubscribeToPerson();
    this.getDaysFromDate(6, 2021);
    try{
      const user = await this.authSvc.getCurrentUser();
      if(!user){
        this.router.navigate(['/login']);
      }
    }catch(error){
      console.log(error);
    }
  }
  
  getDaysFromDate(month:number, year:number) {
    this.num_mes = month;
    this.num_year = year;
    const startDate = moment.utc(`${year}/${month}/01`)
    const endDate = startDate.clone().endOf('month')
    this.dateSelect = startDate;

    const diffDays = endDate.diff(startDate, 'days', true)
    const numberDays = Math.round(diffDays);

    const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {
      a = parseInt(a) + 1;
      const dayObject = moment(`${year}-${month}-${a}`);
      return {
        name: dayObject.format("dddd"),
        value: a,
        indexWeek: dayObject.isoWeekday()
      };
    });

    this.monthSelect = arrayDays;
  }

  changeMonth(flag:number) {
    if (flag < 0) {
      const prevDate = this.dateSelect.clone().subtract(1, "month");
      this.getDaysFromDate(prevDate.format("MM"), prevDate.format("YYYY"));
    } else {
      const nextDate = this.dateSelect.clone().add(1, "month");
      this.getDaysFromDate(nextDate.format("MM"),nextDate.format("YYYY"));
    }
  }

  clickDay(day:any) {
    const monthYear = this.dateSelect.format('YYYY-MM')
    const parse = `${monthYear}-${day.value}`
    const objectDate = moment(parse)
    this.dateValue = objectDate;
    this.fnSave(this.servicio,this.dateValue._i);
  }

  fnEditPerson(cita:CitaModel){
    this.agendaService.fnLoadPerson(cita);
  }

  fnNewPerson(){
    this.agendaService.fnResetLoadPerson();
 }

  fnDeletePerson(cita:CitaModel){
    this.agendaService.fnDeletePerson(cita);
  }


  name:any;
  fecha:any;
  sub_cita:any;

  fnSubscribeToPerson(){
    this.sub_cita = this.agendaService._cita.subscribe(cita=>{
      if(cita){
        //Si el objeto tiene datos es porque se quieren editar
        this.fnLoadPerson(cita);
      }else{
        this.fnCleanForm();
      }
    });
  }

  fnLoadPerson(cita:CitaModel){   
    this.name = cita._name;
    this.fecha = cita._fecha;
  }

  ngOnDestroy(){
    if(this.sub_cita){
      this.sub_cita.unsubscribe();
    }
  }
  
  fnCleanForm(){
    this.name = '';
    this.fecha = '';
  }

  fnSave(servicio:string,fecha:string):void{
    let cita:CitaModel = {
      _name: servicio,
      _fecha: fecha
    } as CitaModel;

    this.agendaService.fnAddPerson(cita);
    this.fnCleanForm();
  }

  //Guardar en Firebase
  uid:any;
  token:any;

  async guardar(){
    try{
      const user = await this.authSvc.getCurrentUser();
      let data = localStorage.getItem('data');
      if(user){
        this.uid = user.uid;
        await this.authSvc.afAuth.idToken.pipe(first()).toPromise().then((payload) => {
          if (payload) {
            this.token = payload
          }
        }).catch((e) => console.log(`Error ${e}`))

        const urapi = `http://localhost:3080/guardar/`+this.uid+'/'+this.token+'/'+data;
        this.Servicio.getJSON(urapi).subscribe((res: any) => {
          this.router.navigate(['/home']);
      });
      }
      else{
        this.router.navigate(['/login']);
      }
    }catch(error){
      console.log(error);
    }
  }
  
}
