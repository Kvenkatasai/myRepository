export class HotelBooking{
    customerName:string;
    customerPhone:number;
    customerAadhar:Number;
    hotelName:string;
    arrivalDate:Date;
    NoOfDays:number;
    bookingId:number;
     constructor( customerName:string,customerPhone:number,customerAadhar:Number,hotelName:string,arrivalDate:Date,bookingId:number,NoOfDays:number){
         this.customerName=customerName;
         this.customerPhone=customerPhone;
         this.customerAadhar=customerAadhar;
         this.hotelName=hotelName;
         this.arrivalDate=arrivalDate;
         this.NoOfDays=NoOfDays;
         this.bookingId=bookingId;
 
     }
 }