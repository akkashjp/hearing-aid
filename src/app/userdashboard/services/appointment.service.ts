import { Injectable } from '@angular/core';
import { Http, Response , RequestOptions, Headers } from '@angular/http';
import { Appconfig } from '../../app.config';

@Injectable()
export class AppointmentService {

  constructor(private config:Appconfig, private http:Http) { }

  getUpdateAppoinment(){
    console.log('inside  getUpdateAppoinment service');
    return this.http.get(this.config.apiUrlLocal.UserAppoinment.UpdateAppoinment).map((response:Response) => response.json());

  }
  getAwaitingRepair(){
    console.log('inside  getAwaitingRepair service');
    return this.http.get(this.config.apiUrlLocal.UserAppoinment.AwaitingRepair).map((response:Response) => response.json());
  }
  getAwaitingFitting(){
    console.log('inside  getAwaitingFitting service');
    return this.http.get(this.config.apiUrlLocal.UserAppoinment.AwaitingFitting).map((response:Response) => response.json());
  }
  getUploadEnt(){
    console.log('inside getUploadEnt service');
    return this.http.get(this.config.apiUrlLocal.UserAppoinment.UploadEnt).map((response:Response) => response.json());
  }
  getCreatingFitting(){
    console.log('inside getCreatingFitting service');
    return this.http.get(this.config.apiUrlLocal.UserAppoinment.CreatingFitting).map((response:Response) => response.json());
  }


}
