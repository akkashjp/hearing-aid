import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { CustomerDashboardService } from '../services/customerdashboard.service';
import { PostService  } from '../services/post.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer: FormGroup;
  entReference:any=[];
  constructor(private fb: FormBuilder,private customerService:CustomerDashboardService,private postService : PostService) { }
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
    this.customerService.customerEnt().subscribe(customerEntData=>{this.entReference=customerEntData})    
  }

  onSubmit()
  {
    console.log("login froem data", this.customer.value);
    this.postService.postCustomer(this.customer.value).subscribe(data =>{
      console.log("suceessfully inserted");
    })
  }
}
