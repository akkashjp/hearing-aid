import { Injectable } from '@angular/core';
import { Http, Response , RequestOptions, Headers } from '@angular/http';
import { Appconfig } from '../app.config';

@Injectable()
export class CustomerDashboardService {

  constructor(private http : Http, private config : Appconfig) { }

  getAppoinments(){
    console.log('inside getAppoinments service');
    return this.http.get(this.config.apiUrlLocal+'/Appointment.json').map((response:Response) => response.json());
  }
 
  getWarrenties(){
    console.log('inside getWarrenties service');
    return this.http.get(this.config.apiUrlLocal+'/Repairs.json').map((response:Response) => response.json());
  }

  getOrders(){
    console.log('inside getOrders service');
    return this.http.get(this.config.apiUrlLocal+'/Orders.json').map((response:Response) => response.json());
  }
}