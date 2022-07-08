import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelBooking } from '../model/HotelBooking';
import { CustomerServiceService } from '../Service/customer-service.service';

@Component({
  selector: 'app-cancelbooking',
  templateUrl: './cancelbooking.component.html',
  styleUrls: ['./cancelbooking.component.css']
})
export class CancelbookingComponent implements OnInit {
   message:any;
   private customerService:CustomerServiceService;
  
   constructor(customerService:CustomerServiceService,private router:Router) {
     this.customerService=customerService;
     this.router=router;
    }

  ngOnInit(): void {
  }
  public cancelBooking(detailes:HotelBooking){
     let res= this.customerService.cancelBooking(detailes);
     res.subscribe((data)=>this.message=data);
  }

}
