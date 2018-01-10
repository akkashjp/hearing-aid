import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService  } from '../services/post.service';
@Component({
  selector: 'app-newcasehistory',
  templateUrl: './newcasehistory.component.html',
  styleUrls: ['./newcasehistory.component.css']
})
export class NewcasehistoryComponent implements OnInit {

  newCaseHistory: FormGroup;
  constructor(private fb: FormBuilder , private postService : PostService) {}


  ngOnInit() {
    this.newCaseHistory=this.fb.group({
      CaseLoudNoise:[''],
      HearingProblem:[''],
      SpecificIllness:[''],
      FamilyHistoryDetails:[''],
      EarDischargeStatus:[''],
      OnSetOfProblem:[''],
      EarDischarge:[''],
      CaseHistoryDate:['']
    })
  }

  onSubmit(){
    console.log(this.newCaseHistory.value);
    this.postService.postCaseHistory(this.newCaseHistory.value).subscribe(data=>{
      console.log("successfully inserted");
    })
  }
}
