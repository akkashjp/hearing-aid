import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AwaitingService } from '../services/awaiting.service';


@Component({
  selector: 'app-awaiting-viaapporders',
  templateUrl: './awaiting-viaapporders.component.html',
  styleUrls: ['./awaiting-viaapporders.component.css']
})
export class AwaitingViaappordersComponent implements OnInit {

  constructor(private awaitingService: AwaitingService) { }
  awaitingViaApp:any=[];
  ngOnInit() {
    this.awaitingService.getAwaitingViaAppOrders().subscribe(
      awaitingViaApp =>{ this.awaitingViaApp = awaitingViaApp;
        console.log('awaitingViaApp',awaitingViaApp);
      })
  }

}
