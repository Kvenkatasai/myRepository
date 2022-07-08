import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelBooking } from '../model/HotelBooking';
import { CustomerServiceService } from '../Service/customer-service.service';

@Component({
  selector: 'app-bookhotels',
  templateUrl: './bookhotels.component.html',
  styleUrls: ['./bookhotels.component.css']
})
export class BookhotelsComponent implements OnInit {
   message:any;


   myArray = ["HotelHimalayas", "Novotel", "SanjNivas", "RajMahal"];





  constructor(private customerService:CustomerServiceService,private router:Router) {
    this.customerService=customerService;
    this.router=router;
   }

  ngOnInit(): void {
  }

  public hotelBooking(detailes:HotelBooking){
   let res= this.customerService.hotelBooking(detailes);
   res.subscribe((data)=>this.message=data);
  }

}
