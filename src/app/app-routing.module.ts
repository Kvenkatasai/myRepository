import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AddhotelsComponent } from './addhotels/addhotels.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BookhotelsComponent } from './bookhotels/bookhotels.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
import { CustomerSignInComponent } from './customer-sign-in/customer-sign-in.component';
import { CustomerSignUpComponent } from './customer-sign-up/customer-sign-up.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { DeletehotelsComponent } from './deletehotels/deletehotels.component';
import { RecepafterloginComponent } from './recepafterlogin/recepafterlogin.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { ReceptionistloginComponent } from './receptionistlogin/receptionistlogin.component';
import { ReceptionistsigninComponent } from './receptionistsignin/receptionistsignin.component';
import { ReceptionistsignupComponent } from './receptionistsignup/receptionistsignup.component';
import { ShowbookingsComponent } from './showbookings/showbookings.component';
import { ShowcustomersComponent } from './showcustomers/showcustomers.component';
import { ShowhotelsComponent } from './showhotels/showhotels.component';
import { UpdatehotelsComponent } from './updatehotels/updatehotels.component';

const routes: Routes = [
  {path:'customer',component:CustomerComponent},
  {path:'reception',component:ReceptionistComponent},
  {path:'customersignup',component:CustomerSignUpComponent},
  {path:'customerlogin',component:CustomerSignInComponent},
  {path:'receptionistsignup',component:ReceptionistsignupComponent},
  {path:'receptionistlogin',component:ReceptionistloginComponent},
  {path:'admin',component:AdminComponent},
  {path:'showhotels',component:ShowhotelsComponent},
  {path:'addhotels',component:AddhotelsComponent},
  {path:'deletehotels',component:DeletehotelsComponent},
  {path:'updatehotels',component:UpdatehotelsComponent},
  { path: 'recepafterlogin', component: RecepafterloginComponent },
  {path:'showcustomers',component:ShowcustomersComponent},
  {path:'customerhome',component:CustomerhomeComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'bookhotels',component:BookhotelsComponent},
  {path:'cancelbooking',component:CancelbookingComponent},
  {path:'showhotelbookings',component:ShowbookingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
