import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopnavComponent } from './common/topnav/topnav.component';
import { FooterComponent } from './common/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddhotelComponent } from './hotel/addhotel/addhotel.component';
import { HotelDetailsComponent } from './hotel/hotel-details/hotel-details.component';
import { HotelviewComponent } from './hotel/hotelview/hotelview.component';
import { UpdateHotelComponent } from './hotel/update-hotel/update-hotel.component';
import { DeleteHotelComponent } from './hotel/delete-hotel/delete-hotel.component';
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { AngularFireStorage } from '@angular/fire/storage';
import {
  AngularFireStorageModule

} from "@angular/fire/storage";
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopnavComponent,
    FooterComponent,
    AddhotelComponent,
    HotelDetailsComponent,
    HotelviewComponent,
    UpdateHotelComponent,
    DeleteHotelComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularEditorModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AngularFireStorageModule,
     AngularFireModule,
     AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
  ],
  providers: [AngularFireStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
