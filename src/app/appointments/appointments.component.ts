import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { CustomerDashboardService } from '../services/customerdashboard.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

appoinmentsData:any = [];
  constructor( private  customerDashboardService : CustomerDashboardService) { }

  ngOnInit() {

    this.getAppoinments();

  }
  private getAppoinments(){
    console.log('inside getAppoinments');
    this.customerDashboardService.getAppoinments().subscribe(
      appoinments=>{ 
        this.appoinmentsData = appoinments;
        console.log('inside getAPpoinments function Data',this.appoinmentsData);
    })
  }
  

}
