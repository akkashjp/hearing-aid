import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService  } from '../services/post.service';


@Component({
  selector: 'app-newcompany',
  templateUrl: './newcompany.component.html',
  styleUrls: ['./newcompany.component.css']
})
export class NewcompanyComponent implements OnInit {

  newCompany: FormGroup;
  constructor(private fb: FormBuilder, private postService : PostService) {}
 
  ngOnInit() {
    this.newCompany=this.fb.group({
      CompanyName:[''],
      email:[''],
      website:[''],
      AddressLine:[''],
      City:[''],
      Country:[''],
      ZipCode:[''],
      ContactNumberOffice1:[''],
      ContactNumberOffice2:[''],
      ContactNumberMobile:[''],
      State:['']
    })
   
  }

  onSubmit(){
    console.log(this.newCompany.value);
    this.postService.postCompany(this.newCompany.value).subscribe(data =>{
      console.log("successfully inserted");
    })
  }

}
