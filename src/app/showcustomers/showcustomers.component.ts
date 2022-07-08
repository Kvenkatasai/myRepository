import { Component, OnInit } from '@angular/core';

import { Customer } from '../model/Customer';


import { CustomerServiceService } from '../Service/customer-service.service';

@Component({
  selector: 'app-showcustomers',
  templateUrl: './showcustomers.component.html',
  styleUrls: ['./showcustomers.component.css']
})
export class ShowcustomersComponent implements OnInit {
  public cust:Customer[]=[];
  
  
  constructor(private customerServiceService:CustomerServiceService){
     this.customerServiceService=customerServiceService;
     this.customerServiceService.getAllUsers().subscribe(
      res=>{
        console.log(res);
        this.cust=res;
      },
      error=>console.log(error));
      
     console.log("trip value is "+this.cust);
  }

  ngOnInit(): void {
  }
  
  
}
