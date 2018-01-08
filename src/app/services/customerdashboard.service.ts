import { Injectable } from '@angular/core';
import { Http, Response , RequestOptions, Headers } from '@angular/http';
import { Appconfig } from '../app.config';

@Injectable()
export class CustomerDashboardService {

  constructor(private http : Http, private config : Appconfig) { }

  getAppoinments(){   
    return this.http.get(this.config.apiUrlLocal.Appointment).map((response:Response) => response.json());
  }
 
  getWarrenties(){
    return this.http.get(this.config.apiUrlLocal.Repairs).map((response:Response) => response.json());
  }

  getOrders(){
    return this.http.get(this.config.apiUrlLocal.Order).map((response:Response) => response.json());
  }

  getAudioligist(){
    return this.http.get(this.config.apiUrlLocal.Audioligist).map((response:Response) => response.json());
  }

  customerEnt(){   
    return this.http.get(this.config.apiUrlLocal.customerEnt).map((response:Response) => response.json());
  }
}
