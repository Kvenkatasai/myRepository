import { Component, OnInit } from '@angular/core';
import { Hotel } from '../model/Hotel';
import { CustomerServiceService } from '../Service/customer-service.service';

@Component({
  selector: 'app-deletehotels',
  templateUrl: './deletehotels.component.html',
  styleUrls: ['./deletehotels.component.css']
})
export class DeletehotelsComponent implements OnInit {
   message1:any;
  private customerService:CustomerServiceService;
  constructor(customerService:CustomerServiceService) { 
    this.customerService=customerService;
   }
  ngOnInit(): void {
  }

  public deleteHotel(detailes:Hotel){
    let res=this.customerService.deleteHotel(detailes);
    res.subscribe((data)=>this.message1=data);
  }


}
