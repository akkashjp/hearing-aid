import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerDashboardService } from '../services/customerdashboard.service';

@Component({
  selector: 'app-newappointment',
  templateUrl: './newappointment.component.html',
  styleUrls: ['./newappointment.component.css']
})
export class NewappointmentComponent implements OnInit {

  newAppointment: FormGroup;
  constructor(private fb: FormBuilder, private customerService:CustomerDashboardService) {}
  audioligist:any=[];
  ngOnInit() {
    this.newAppointment =this.fb.group({
      AppointmentDate:[''],
      AppointmentFromTime:[''],
      AppointmentToTime:[''],
      AppointmentType:[''],
      AudiologistID:[''],
      Remarks:['']
    })
    this.customerService.getAudioligist().subscribe(audioligistData=>{this.audioligist=audioligistData})    
  }

  onSubmit(){
    console.log(this.newAppointment.value);
  }
}
