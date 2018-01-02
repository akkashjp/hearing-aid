import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newappointment',
  templateUrl: './newappointment.component.html',
  styleUrls: ['./newappointment.component.css']
})
export class NewappointmentComponent implements OnInit {

  newAppointment: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.newAppointment =this.fb.group({
      AppointmentDate:[''],
      AppointmentFromTime:[''],
      AppointmentToTime:[''],
      AppointmentType:[''],
      AudiologistID:[''],
      Remarks:['']
    })
  }

  onSubmit(){
    console.log(this.newAppointment.value);
  }
}
