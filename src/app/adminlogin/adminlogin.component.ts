import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../model/Admin';
import { CustomerServiceService } from '../Service/customer-service.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  message2: any;
  condition:Boolean | undefined;
   private customerService:CustomerServiceService;
  
   constructor(customerService:CustomerServiceService,private router:Router) {
     this.customerService=customerService;
     this.router=router;
    }
  ngOnInit(): void {
  }
  public adminlogin(detailes:Admin){
    let res= this.customerService.adminLogin(detailes);
    res.subscribe((data)=>this.message2=data);

    if(this.message2==1){
      console.log(this.message2);
      this.router.navigateByUrl('/admin');
     }
     else{
      console.log("error");
       this.condition=true;
     }
  }

}
