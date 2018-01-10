import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService  } from '../services/post.service';
@Component({
  selector: 'app-newmodel',
  templateUrl: './newmodel.component.html',
  styleUrls: ['./newmodel.component.css']
})
export class NewmodelComponent implements OnInit {
   newModel : FormGroup
  constructor( private fb : FormBuilder, private postservice : PostService) { }

  ngOnInit() {
    this.newModel=this.fb.group({
      CompanyName:[''],
      ProductName:[''],
      ModelName:[''],
      CompModelNumber:[''],
      WarrantyType:[''],
      Warranty:[''],
      Price:['']
    })
    
  }
  submit(){
    console.log("in new model",this.newModel.value);
    this.postservice.postModel(this.newModel.value).subscribe(data =>{
      console.log("suceessfully inserted");
    })
  }

}
