import { Component, OnInit , Input} from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { KeysPipe } from '../../keys.pipe'


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  @Input() compToView:string;
  constructor(private appointmentService:AppointmentService) { }
  cssStyle:string;
  dataFromUrl:any;
  customer:any;

  //for css
  orange:boolean=false;
  green:boolean=false;
  purple:boolean=false;
  
  ngOnInit() {
    switch(this.compToView){
      case 'Updateappoinment': {this.updateAppoinment();this.orange=true;}
      break;
      case 'Awaitingrepair':{this.awaitingRepair();this.orange=true;}
      break;
      case 'Awaitingfitting': {this.awaitingFitting();this.green=true;}  
      break;
      case 'UploadENT': {this.uploadEnt();this.orange=true;}    
      break;
      case 'Creatingfitting': {this.creatingFitting();this.purple=true;}
      break;
    }
  }

  updateAppoinment(){
    this.appointmentService.getUpdateAppoinment().subscribe(
      data =>{ this.dataFromUrl = data;
        console.log('updateappoinment',this.dataFromUrl);
        this.customer=this.dataFromUrl.map((jsonData)=>{return {customerName:jsonData.Customer,customerId:jsonData.CustomerId}});
      }
    )
  }
  awaitingRepair(){
    this.appointmentService.getAwaitingRepair().subscribe(
      data =>{ this.dataFromUrl = data;
        console.log('awaitingrepair',this.dataFromUrl);
        this.customer=this.dataFromUrl.map((jsonData)=>{return {customerName:jsonData.InvCustomerName,customerId:jsonData.DelvCustId}});
      }
    )

  }
  awaitingFitting(){
    this.appointmentService.getAwaitingFitting().subscribe(
      data =>{ this.dataFromUrl = data;
        console.log('awaitingfitting',this.dataFromUrl);
        this.customer=this.dataFromUrl.map((jsonData)=>{return {customerName:jsonData.InvCustomerName,customerId:jsonData.DelvCustId}});
        
      }
    )

  }
  uploadEnt(){
    this.appointmentService.getUploadEnt().subscribe(
      data =>{ this.dataFromUrl = data;
        console.log('uploadEnt',this.dataFromUrl);
        this.customer=this.dataFromUrl.map((jsonData)=>{return {customerName:jsonData.Customer,customerId:jsonData.CustomerId}});
      }
    )
  }
  creatingFitting(){
    this.appointmentService.getCreatingFitting().subscribe(
      data =>{ this.dataFromUrl = data;
        console.log('creatingfitting',this.dataFromUrl);
        this.customer=this.dataFromUrl.map((jsonData)=>{return {customerName:jsonData.InvCustomerName,customerId:jsonData.DelvCustId}});
      }
    )
  }

}
