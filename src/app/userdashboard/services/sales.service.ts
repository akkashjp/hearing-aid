import { Injectable } from '@angular/core';
import { Http, Response , RequestOptions, Headers } from '@angular/http';
import { Appconfig } from '../../app.config';

@Injectable()
export class SalesService {

  constructor(private http : Http, private config : Appconfig) { }


  getSalesAllocated(){
    console.log('inside getSalesAllocated service');
    return this.http.get(this.config.apiUrlLocal+'/.json').map((response:Response) => response.json());
  }

  getSalesOverdues(){
    console.log('inside getSalesOverdues service');
    return this.http.get(this.config.apiUrlLocal+'/.json').map((response:Response) => response.json());
  }

  getSalesProcessing(){
    console.log('inside getSalesProcessing service');
    return this.http.get(this.config.apiUrlLocal+'/.json').map((response:Response) => response.json());
  }

  getSalesTrials(){
    console.log('inside getSalesTrials service');
    return this.http.get(this.config.apiUrlLocal+'/.json').map((response:Response) => response.json());
  }

}
