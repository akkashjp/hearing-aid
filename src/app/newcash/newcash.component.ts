import { Component, OnInit } from '@angular/core';
import { PostService  } from '../services/post.service';

@Component({
  selector: 'app-newcash',
  templateUrl: './newcash.component.html',
  styleUrls: ['./newcash.component.css']
})
export class NewcashComponent implements OnInit {
 data :any;
  constructor(private postService : PostService) { }

  ngOnInit() {
  }
 submit(){
  this.postService.postCashDeposit(this.data).subscribe(data =>{
    console.log("successfully inserted");
  })
 }
}
