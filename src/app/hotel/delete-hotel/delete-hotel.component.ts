import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-delete-hotel',
  templateUrl: './delete-hotel.component.html',
  styleUrls: ['./delete-hotel.component.css']
})
export class DeleteHotelComponent implements OnInit {
  Mhid: any;

  constructor(private route: ActivatedRoute,private hotelService:HotelService) { }

  ngOnInit(): void {
    this.Mhid = this.route.snapshot.params['id'];

  }
  DeleteHotelInfo():void{
    this.hotelService
    .DeleteHotelDetails(this.Mhid)
    .subscribe(( Response : any) => {
      console.log(Response);

    });
  }

}
