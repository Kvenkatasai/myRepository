export class Customer{
    customerName:string;
    customerPhone:number;
    customerEmail:string;
    customerPassword:string;
    customerAadharNo:number;
    customerWalletMoney:number;
    customerId:number;
     constructor(customerName:string,customerPhone:number,customerEmail:string,customerPassword:string,customerAadharNo:number,customerWalletMoney:number,customerId:number){
          this.customerName=customerName;
          this.customerPhone=customerPhone;
          this.customerEmail=customerEmail;
          this.customerPassword=customerPassword;
          this.customerAadharNo=customerAadharNo;
          this.customerWalletMoney=customerWalletMoney;
          this.customerId=customerId;
 
     }
 }