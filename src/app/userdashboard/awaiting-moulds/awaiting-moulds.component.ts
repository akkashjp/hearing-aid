import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AwaitingService } from '../services/awaiting.service';

@Component({
  selector: 'app-awaiting-moulds',
  templateUrl: './awaiting-moulds.component.html',
  styleUrls: ['./awaiting-moulds.component.css']
})
export class AwaitingMouldsComponent implements OnInit {

  constructor(private awaitingService: AwaitingService) { }

  awaitingmoulds:any=[];
  ngOnInit() {
    this.awaitingService.getAwaitingMoulds().subscribe(
      awaitingmoulds =>{ this.awaitingmoulds = awaitingmoulds;
        console.log('awaitingmoulds',awaitingmoulds)});
  }
  

}
