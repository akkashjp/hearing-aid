import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AwaitingService } from '../services/awaiting.service';


@Component({
  selector: 'app-awaiting-repairs',
  templateUrl: './awaiting-repairs.component.html',
  styleUrls: ['./awaiting-repairs.component.css']
})
export class AwaitingRepairsComponent implements OnInit {

  constructor(private awaitingService: AwaitingService) { }

  awaitingrepairs:any=[];
  ngOnInit() {
    this.awaitingService.getAwaitingRepairs().subscribe(
      awaitingrepairs =>{ this.awaitingrepairs = awaitingrepairs;
        console.log('awaitingViaApp',awaitingrepairs);
      })
  }

}
