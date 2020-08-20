import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { map, catchError } from 'rxjs/operators';
import { HotelDetails } from '../model/hotelDetails';

@Injectable({
  providedIn: 'root'
})
//Hotel services Releated for Hotel Inventory management Api calls
export class HotelService {

  constructor(private http: HttpClient) {

  }
  ApiUrl = environment.apiEndpoint;
  // environment.apiEndpoint;
  //Api calls to add new hotels to the inventory
  AddHotelDeTails(hotelDetails: HotelDetails): Observable<HotelDetails> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<HotelDetails>(this.ApiUrl + 'AddHotel',
      hotelDetails, httpOptions);
  }
  //Api calls to get  hotelList from  the inventory
  getHotelList(): Observable<Response> {
    return this.http.get(this.ApiUrl).
      pipe(
        map((data: Response) => {
          return data;
        }), catchError(error => {
          return throwError('Something went wrong!');
        })
      )
  }
  //Api calls to get hotelList based on the mhid
  getHotelByMhid(Mhid: any): Observable<Response> {
    return this.http.get(this.ApiUrl + Mhid).
      pipe(
        map((data: Response) => {
          return data;
        }), catchError(error => {
          return throwError('Something went wrong!');
        })
      )

  }
  //Api calls to delete hotel based on Mhid
  DeleteHotelDetails(Mhid: any): Observable<Response> {
    return this.http.delete(this.ApiUrl + Mhid).
      pipe(
        map((data: Response) => {
          return data;
        }), catchError(error => {
          return throwError('Something went wrong!');
        })
      )
  }
  //Api calls to Update Hotel Details based on Mhid
  UpdateHotelDeTails(Mhid: number, hotelDetails: HotelDetails): Observable<HotelDetails> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<HotelDetails>(this.ApiUrl + 'updateHotelInfo/' + Mhid,
      hotelDetails, httpOptions);
  }
}
