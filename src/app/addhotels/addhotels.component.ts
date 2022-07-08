import { Component, OnInit } from '@angular/core';
import { Hotel } from '../model/Hotel';
import { CustomerServiceService } from '../Service/customer-service.service';

@Component({
  selector: 'app-addhotels',
  templateUrl: './addhotels.component.html',
  styleUrls: ['./addhotels.component.css']
})
export class AddhotelsComponent implements OnInit {
   message:any;

  private customerService:CustomerServiceService;
  constructor(customerService:CustomerServiceService) {
    this.customerService=customerService;
   }

  ngOnInit(): void {
  }
  public addHotel(detailes:Hotel){
    let res= this.customerService.addHotel(detailes);
    res.subscribe((data)=>this.message=data);
  }

}
