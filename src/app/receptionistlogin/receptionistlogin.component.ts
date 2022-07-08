import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Receptionist } from '../model/Receptionist';
import { CustomerServiceService } from '../Service/customer-service.service';

@Component({
  selector: 'app-receptionistlogin',
  templateUrl: './receptionistlogin.component.html',
  styleUrls: ['./receptionistlogin.component.css']
})
export class ReceptionistloginComponent implements OnInit {

  message3: any;
  condition:Boolean | undefined;
   private customerService:CustomerServiceService;
  
   constructor(customerService:CustomerServiceService,private router:Router) {
     this.customerService=customerService;
     this.router=router;
    }
  ngOnInit(): void {
  }
  public recepLogin(detailes:Receptionist){
    let res= this.customerService.recepLogin(detailes);
    res.subscribe((data)=>this.message3=data);

    if(this.message3==1){
      console.log(this.message3);
      this.router.navigateByUrl('/recepafterlogin');
     }
     else{
      console.log("error");
       this.condition=true;
     }
  }

}
