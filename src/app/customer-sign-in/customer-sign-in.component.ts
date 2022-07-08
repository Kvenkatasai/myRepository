import { NgIf } from '@angular/common';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../model/Customer';
import { CustomerServiceService } from '../Service/customer-service.service';

@Component({
  selector: 'app-customer-sign-in',
  templateUrl: './customer-sign-in.component.html',
  styleUrls: ['./customer-sign-in.component.css']
})
export class CustomerSignInComponent implements OnInit {
   message1: any;
   condition:Boolean | undefined;
   

  
  
   private customerService:CustomerServiceService;
  
  constructor(customerService:CustomerServiceService,private router:Router) {
    this.customerService=customerService;
    this.router=router;
   }

  ngOnInit(): void {
  }

  
  

   login(detailes:Customer){
   let res= this.customerService.customerLogin(detailes);
   res.subscribe((data)=>this.message1=data);
    
 
   if(this.message1==1){
    console.log(this.message1);
    this.router.navigateByUrl('/customerhome');
   }
   else{
    console.log("error");
     this.condition=true;
   }
    
     

    
  }


}