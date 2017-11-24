import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  personalDetials: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.personalDetials = this.fb.group({
      firstName: ['', Validators.required ],
      address:  ['', Validators.required ],
      state: ['', Validators.required ],
    });
  }

  getDetials()
  {
    console.log("login froem data", this.personalDetials.value)
  }
}
