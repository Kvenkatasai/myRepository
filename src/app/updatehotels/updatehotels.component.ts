import { Component, OnInit } from '@angular/core';
import { Hotel } from '../model/Hotel';
import { CustomerServiceService } from '../Service/customer-service.service';

@Component({
  selector: 'app-updatehotels',
  templateUrl: './updatehotels.component.html',
  styleUrls: ['./updatehotels.component.css']
})
export class UpdatehotelsComponent implements OnInit {
  message1:any;

  private customerService:CustomerServiceService;
  constructor(customerService:CustomerServiceService) {
    this.customerService=customerService;
   }

  ngOnInit(): void {
  }
  public updateHotel(detailes:Hotel){
    let res= this.customerService.updateHotel(detailes);
    res.subscribe((data)=>this.message1=data);
  }

}
