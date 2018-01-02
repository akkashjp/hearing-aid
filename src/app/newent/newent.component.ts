import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-newent',
  templateUrl: './newent.component.html',
  styleUrls: ['./newent.component.css']
})
export class NewentComponent implements OnInit {

  newEnt: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.newEnt=this.fb.group({
      FirstName:[''],
      LastName:[''],
      AddressLine:[''],
      City:[''],
      State:[''],
      Country:[''],
      ZipCode:[''],
      HospitalName:[''],
      DateofBirth:[''],
      Gender:[''],
      Designation:[''], 
      ContactNumberResidence:[''],
      ContactNumberOffice:[''],
      ContactNumberMobile:[''],
      EmailAddress:[''],
      SpouseName:[''],
      SpouseDOB:[''],
      MarriageDate:['']
    })
   
  }

  onSubmit(){
    console.log(this.newEnt.value);
  }

}
