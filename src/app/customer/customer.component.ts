import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.customer = this.fb.group({
      FirstName: ['', Validators.required ],
      LastName:[''],
      AddressLine:  ['', Validators.required ],
      City:[''],
      State: ['', Validators.required ],
      Country:[''],
      ZipCode:[''],
      DateofBirth:[''],
      Gender:[''],
      Occupation:[''],
      ReferenceTypeIndicator:[''],
      ReferredBy:[''],
      ContactNumberResidence:[''],
      ContactNumberOffice:[''],
      ContactNumberMobile:[''],
      EmailAddress:[''],      
    });
  }

  onSubmit()
  {
    console.log("login froem data", this.customer.value)
  }
}
