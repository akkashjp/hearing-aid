import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { PostService  } from '../services/post.service';

@Component({
  selector: 'app-eodtally',
  templateUrl: './eodtally.component.html',
  styleUrls: ['./eodtally.component.css']
})
export class EodtallyComponent implements OnInit {
  eodTally: FormGroup;
  thousands :number;
  fivehundreds:number;
  hundreds:number;
  fifty:number;
  tens:number;
  fives:number;
  ones:number;
  constructor(private fb: FormBuilder ,private postService : PostService) { }

  total:number;

  ngOnInit() {
    this.eodTally = this.fb.group({
      Thousands: [0],
      FiveHundreds:[0],
      Hundreds:  [0],
      Fiftys:[0],
      Tens: [0],
      Fives:[0],
      Ones:[0],
      CashDifference:[0],        
    });

    
  }

  onSubmit(){
    console.log('eodTally',this.eodTally.value);
    this.postService.postEodTally(this.eodTally.value).subscribe(data=>{
      console.log("successfully inserted");
    })
  }

  onKeyup(){
    this.thousands = this.eodTally.get('Thousands').value*1000;
    this.fivehundreds = this.eodTally.get('FiveHundreds').value*500;
    this.hundreds = this.eodTally.get('Hundreds').value*100;
    this.fifty = this.eodTally.get('Fiftys').value*50;
    this.tens = this.eodTally.get('Tens').value*10;
    this.fives = this.eodTally.get('Fives').value*5;
    this.ones = this.eodTally.get('Ones').value;

    
    this.total =this.thousands+ this.fivehundreds + this.hundreds + this.fifty + this.tens + this.fives + this.ones
    console.log('sum',this.total);


  }

}
