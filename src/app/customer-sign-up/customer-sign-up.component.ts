import { Component, OnInit } from '@angular/core';

import { Customer } from '../model/Customer';
import { CustomerServiceService } from '../Service/customer-service.service';

@Component({
  selector: 'app-customer-sign-up',
  templateUrl: './customer-sign-up.component.html',
  styleUrls: ['./customer-sign-up.component.css']
})
export class CustomerSignUpComponent implements OnInit {
  message:any;

  
   private customerService:CustomerServiceService;
  constructor(customerService:CustomerServiceService) { 
    this.customerService=customerService;
   
    
  }

  ngOnInit(): void {
  }
  customerRegistration(detailes:Customer){
     let res= this.customerService.customerRegistration(detailes);
     res.subscribe((data)=>this.message=data);
     
 }

}
