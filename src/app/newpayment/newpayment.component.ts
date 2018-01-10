import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService  } from '../services/post.service';
@Component({
  selector: 'app-newpayment',
  templateUrl: './newpayment.component.html',
  styleUrls: ['./newpayment.component.css']
})
export class NewpaymentComponent implements OnInit {
 newPayment : FormGroup;
  constructor( private fb : FormBuilder , private postService : PostService) { }

  ngOnInit() {
    this.newPayment=this.fb.group({
      PaidAmount:[''],
      Paytype:['']
    })
  }
  submit(){
    console.log("in new payments",this.newPayment.value);
    this.postService.postPayments(this.newPayment.value).subscribe(data=>{
      console.log("successfully inserted");
    })
  }

}
