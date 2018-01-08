import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-eodtally',
  templateUrl: './eodtally.component.html',
  styleUrls: ['./eodtally.component.css']
})
export class EodtallyComponent implements OnInit {
  eodTally: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.eodTally = this.fb.group({
      Thousands: [''],
      FiveHundreds:[''],
      Hundreds:  [''],
      Fiftys:[''],
      Tens: [''],
      Fives:[''],
      Ones:[''],
      CashDifference:[''],        
    });
  }

  onSubmit(){
    console.log('eodTally',this.eodTally.value);
  }

}
