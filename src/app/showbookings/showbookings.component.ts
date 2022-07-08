import { Component, OnInit } from '@angular/core';
import { HotelBooking } from '../model/HotelBooking';
import { CustomerServiceService } from '../Service/customer-service.service';

@Component({
  selector: 'app-showbookings',
  templateUrl: './showbookings.component.html',
  styleUrls: ['./showbookings.component.css']
})
export class ShowbookingsComponent implements OnInit {

  public bookings:HotelBooking[]=[];
  
  
  constructor(private customerServiceService:CustomerServiceService){
     this.customerServiceService=customerServiceService;
     this.customerServiceService.getHotelBookings().subscribe(
      res=>{
        console.log(res);
        this.bookings=res;
      },
      error=>console.log(error));
      
     console.log("trip value is "+this.bookings);
  }


  ngOnInit(): void {
  }
 

}
