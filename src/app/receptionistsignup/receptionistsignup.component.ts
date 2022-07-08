import { Component, OnInit } from '@angular/core';
import { Receptionist } from '../model/Receptionist';
import { CustomerServiceService } from '../Service/customer-service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-receptionistsignup',
  templateUrl: './receptionistsignup.component.html',
  styleUrls: ['./receptionistsignup.component.css']
})
export class ReceptionistsignupComponent implements OnInit {
  message:any;
  private customerService:CustomerServiceService;
 constructor(customerService:CustomerServiceService,private router:Router) { 
   this.customerService=customerService;
   this.router=router;
   
 }

  

  ngOnInit(): void {
  }

  public receptionistRegistration(detailes:Receptionist){
    let res= this.customerService.receptionistRegistration(detailes);
    res.subscribe((data)=>this.message=data);
  }
  onClick () {
    this.router.navigateByUrl('/recepafterlogin');
};
  
}


