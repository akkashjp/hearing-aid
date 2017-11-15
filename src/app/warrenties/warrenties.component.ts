import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warrenties',
  templateUrl: './warrenties.component.html',
  styleUrls: ['./warrenties.component.css']
})
export class WarrentiesComponent implements OnInit {
    
    warrenties =[{'serialno':122323,'ear':'l','warrentystart':'2014-12-22','warrentyend':'2015-5-22','status':'N'},{'serialno':122323,'ear':'l','warrentystart':'2014-12-22','warrentyend':'2015-5-22','status':'N'}]

  constructor() { }

  ngOnInit() {
  }

}
