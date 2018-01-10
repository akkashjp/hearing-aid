import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService  } from '../services/post.service';

@Component({
  selector: 'app-newexpense',
  templateUrl: './newexpense.component.html',
  styleUrls: ['./newexpense.component.css']
})
export class NewexpenseComponent implements OnInit {
  newExpense: FormGroup;
  constructor( private fb:FormBuilder , private postService : PostService ) { }

  ngOnInit() {

    this.newExpense =this.fb.group({
      ReceivedBy:[''],
      PaidAmount:[''],
      PaidDate:[''],
     
    })
  }
  submit(){
    console.log("newwexpensess--->",this.newExpense.value);
    this.postService.postCashflowExpenses(this.newExpense.value).subscribe(data =>{
      console.log("successfully inserted");
    })
  }
}
