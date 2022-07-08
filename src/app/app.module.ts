import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerSignUpComponent } from './customer-sign-up/customer-sign-up.component';
import { CustomerSignInComponent } from './customer-sign-in/customer-sign-in.component';
import { CustomerComponent } from './customer/customer.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerServiceService } from './Service/customer-service.service';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { ReceptionistsignupComponent } from './receptionistsignup/receptionistsignup.component';
import { ReceptionistsigninComponent } from './receptionistsignin/receptionistsignin.component';
import { AdminComponent } from './admin/admin.component';
import { ShowhotelsComponent } from './showhotels/showhotels.component';
import { AddhotelsComponent } from './addhotels/addhotels.component';
import { DeletehotelsComponent } from './deletehotels/deletehotels.component';
import { UpdatehotelsComponent } from './updatehotels/updatehotels.component';
import { RecepafterloginComponent } from './recepafterlogin/recepafterlogin.component';
import { ShowcustomersComponent } from './showcustomers/showcustomers.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { ReceptionistloginComponent } from './receptionistlogin/receptionistlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BookhotelsComponent } from './bookhotels/bookhotels.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
import { ShowbookingsComponent } from './showbookings/showbookings.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerSignUpComponent,
    CustomerSignInComponent,
    CustomerComponent,
    ReceptionistComponent,
    ReceptionistsignupComponent,
    ReceptionistsigninComponent,
    AdminComponent,
    ShowhotelsComponent,
    AddhotelsComponent,
    DeletehotelsComponent,
    UpdatehotelsComponent,
    RecepafterloginComponent,
    ShowcustomersComponent,
    CustomerhomeComponent,
    ReceptionistloginComponent,
    AdminloginComponent,
    BookhotelsComponent,
    CancelbookingComponent,
    ShowbookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CustomerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
