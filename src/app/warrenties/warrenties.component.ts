import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { CustomerDashboardService } from '../services/customerdashboard.service';

@Component({
  selector: 'app-warrenties',
  templateUrl: './warrenties.component.html',
  styleUrls: ['./warrenties.component.css']
})
export class WarrentiesComponent implements OnInit {
    
    warrenties =[{'serialno':122323,'ear':'l','warrentystart':'2014-12-22','warrentyend':'2015-5-22','status':'N'},{'serialno':122323,'ear':'l','warrentystart':'2014-12-22','warrentyend':'2015-5-22','status':'N'}]

  constructor( private customerDashboardService :CustomerDashboardService) { }

  ngOnInit() {
    this.getWarrenties();
  }

  private getWarrenties(){
    console.log('inside getAppoinments');
    this. customerDashboardService.getWarrenties().subscribe(
      warrentiesData=>{ 
        this.warrenties = warrentiesData;
        console.log('inside warrenties function Data',this.warrenties);
    })
  }



}
