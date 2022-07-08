import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/Admin';
import { Customer } from '../model/Customer';
import { Hotel } from '../model/Hotel';
import { HotelBooking } from '../model/HotelBooking';
import { Receptionist } from '../model/Receptionist';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  customers:any;
 
    private httpClient:HttpClient;
  constructor(httpClient:HttpClient) { 
    this.httpClient=httpClient;
  }
  public customerRegistration(detailes:Customer){
    return   this.httpClient.post("http://localhost:8081/posting",detailes,{responseType:'text' as 'json'});
    }

    public receptionistRegistration(detailes:Receptionist){
       return this.httpClient.post("http://localhost:8081/rposting",detailes,{responseType:'text' as 'json'});
    }
  public customerLogin(detailes:Customer){
   
    return  this.httpClient.post("http://localhost:8081/login",detailes,{responseType:'text' as 'json'});
   }

   public adminLogin(detailes:Admin){
   
    return  this.httpClient.post("http://localhost:8081/alogin",detailes,{responseType:'text' as 'json'});
   }

   public recepLogin(detailes:Receptionist){
    return this.httpClient.post("http://localhost:8081/rlogin",detailes,{responseType:'text' as 'json'});
   }

    
   public deleteHotel(detailes:Hotel){
    let Id=detailes.hotelId;
    return this.httpClient.delete("http://localhost:8081/hdelete/"+Id,{responseType:'text' as 'json'});
   }

   public cancelBooking(detailes:HotelBooking){
    let Id=detailes.bookingId;
    return this.httpClient.delete("http://localhost:8081/bdelete/"+Id,{responseType:'text' as 'json'});
   }
   
   public hotelBooking(detailes:HotelBooking){
    return this.httpClient.post("http://localhost:8081/hbpost",detailes,{responseType:'text' as 'json'})
   }


  public getAllUsers():Observable<any>{
    return this.httpClient.get("http://localhost:8081/get");
    }

    public getAllhotels():Observable<any>{
      return this.httpClient.get("http://localhost:8081/hget");
    }

    public getHotelBookings():Observable<any>{
      return this.httpClient.get("http://localhost:8081/bhget");
    }


  public addHotel(detailes:Hotel){
   return this.httpClient.post("http://localhost:8081/hposting",detailes,{responseType:'text' as 'json'});
   }

   public updateHotel(detailes:Hotel){
    return this.httpClient.put("http://localhost:8081/hput",detailes,{responseType:'text' as 'json'});
   }

  
}