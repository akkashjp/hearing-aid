import { Injectable } from '@angular/core';
import { Http, Response , RequestOptions, Headers } from '@angular/http';
import { Appconfig } from '../../app.config';

@Injectable()
export class AwaitingService {

  constructor(private http : Http, private config : Appconfig) { }

  getAwaitingMoulds(){
    console.log('inside getAwaitingMoulds service');
    return this.http.get(this.config.apiUrlLocal+'/Moulds(Awaiting).json').map((response:Response) => response.json());
  }

  getAwaitingPos(){
    console.log('inside getAwaitingPos service');
    return this.http.get(this.config.apiUrlLocal+'/Pos(Awaiting).json').map((response:Response) => response.json());
  }

  getAwaitingRepairs(){
    console.log('inside getAwaitingRepairs service');
    return this.http.get(this.config.apiUrlLocal+'/AwaitingRepairs.json').map((response:Response) => response.json());
  }

  getAwaitingViaAppOrders(){
    console.log('inside getAwaitingViaAppOrders service');
    return this.http.get(this.config.apiUrlLocal+'/Apporders(Awaiting).json').map((response:Response) => response.json());
  }

}
