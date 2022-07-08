export class Admin{
    adminId:number;
    adminName:string;
    adminPhone:number;
    adminEmail:string;
    adminPassword:string;
   
    
     constructor(adminName:string,adminPhone:number,adminEmail:string,adminPassword:string,adminId:number){
          this.adminName=adminName;
          this.adminPhone=adminPhone;
          this.adminEmail=adminEmail;
          this.adminPassword=adminPassword;
          this.adminId=adminId;
 
     }
 }