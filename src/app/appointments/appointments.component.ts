import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit() {

  }
  

}
