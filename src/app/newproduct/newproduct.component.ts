import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService  } from '../services/post.service';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
 newProduct : FormGroup;
  constructor(private fb : FormBuilder , private postService : PostService) { }

  ngOnInit() {
    this.newProduct=this.fb.group({
      ProductName:[''],
      WithMould:['']
    })
  }
 submit(){
   console.log("newProduct--->",this.newProduct.value);
  this.postService.postProduct(this.newProduct.value).subscribe(data => {
   console.log("successfully inserted");
  })
 }
}
