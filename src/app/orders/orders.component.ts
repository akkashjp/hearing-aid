import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { CustomerDashboardService } from '../services/customerdashboard.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orderData:any = [];
  constructor(  private  customerDashboardService : CustomerDashboardService ) { }

  ngOnInit() {
    this.getOrders();
  }
  private getOrders(){
    console.log('inside ');
    this.customerDashboardService.getOrders().subscribe(
      orders=>{ 
        this.orderData = orders;
        console.log('inside getordres function Data',this.orderData);
    })
  }
}
