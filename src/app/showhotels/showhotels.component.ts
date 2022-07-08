import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from '../model/Hotel';
import { CustomerServiceService } from '../Service/customer-service.service';

@Component({
  selector: 'app-showhotels',
  templateUrl: './showhotels.component.html',
  styleUrls: ['./showhotels.component.css']
})
export class ShowhotelsComponent implements OnInit {
  public hotel:Hotel[]=[];
  public hotel1:Hotel[]=[];
  
  public constructor(private customerServiceService:CustomerServiceService,private router:Router){
     this.customerServiceService=customerServiceService;
     this.router=router;
     this.customerServiceService.getAllhotels().subscribe(
      res=>{
        console.log(res);
        this.hotel=res;
      },
      error=>console.log(error));
      
     console.log("trip value is "+this.hotel);
  }

  ngOnInit(): void {
  }
 
 

}


