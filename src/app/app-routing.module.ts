import { UpdateHotelComponent } from './hotel/update-hotel/update-hotel.component';
import { DeleteHotelComponent } from './hotel/delete-hotel/delete-hotel.component';
import { HotelviewComponent } from './hotel/hotelview/hotelview.component';
import { AddhotelComponent } from './hotel/addhotel/addhotel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelDetailsComponent } from './hotel/hotel-details/hotel-details.component';


const routes: Routes = [
  {path:'',component:DashboardComponent},
  { path: 'Addhotel', component: AddhotelComponent },
  { path: 'hotel-detail/:id', component:  HotelDetailsComponent},
  { path: 'hotelview', component:  HotelviewComponent},
  { path: 'delete:id', component:  DeleteHotelComponent},
  { path: 'update/:id', component:  UpdateHotelComponent},
  { path: '', component:  DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
