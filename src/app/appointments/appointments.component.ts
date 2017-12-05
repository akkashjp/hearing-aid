import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { AppointmentsService } from '../services/appointments.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointments =[{'#':1,"date":"12-12-1994",
  'type':'Hearing Aid Enquiry',
 'audiologist':'chandana ongolo',
'status':'HA ordered'},
{'#':2,"date":"12-12-1994",
'type':'Hearing Aid Enquiry',
'audiologist':'chandana ongolo',
'status':''}];

appoinmentsData:any = [];
  constructor( private appointmentService : AppointmentsService) { }

  ngOnInit() {

    this.getAppoinments();

  }
  private getAppoinments(){
    console.log('inside getAppoinments');
    this.appointmentService.getAppoinments().subscribe(
      appoinments=>{ 
        this.appoinmentsData = appoinments;
        console.log('inside getAPpoinments function Data',this.appoinmentsData);
    })
  }
  

}
