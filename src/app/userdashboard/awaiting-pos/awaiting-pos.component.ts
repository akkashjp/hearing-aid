import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AwaitingService } from '../services/awaiting.service';

@Component({
  selector: 'app-awaiting-pos',
  templateUrl: './awaiting-pos.component.html',
  styleUrls: ['./awaiting-pos.component.css']
})
export class AwaitingPosComponent implements OnInit {

  constructor(private awaitingService: AwaitingService) { }
  awaitingpos:any=[];
  ngOnInit() {
    this.awaitingService.getAwaitingPos().subscribe(
      awaitingpos =>{ this.awaitingpos = awaitingpos;
        console.log('awaitingpos',awaitingpos)});
  }

}
