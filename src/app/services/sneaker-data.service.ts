import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Sneaker } from '../models/sneaker.model';

const URL : string = "https://6871b54776a5723aacd295cf.mockapi.io/api/v1/sneakers";

@Injectable({
  providedIn: 'root'
})
export class SneakerDataService {
  constructor(private http: HttpClient) {

  }

  // returns a observable object from the response of the server
  public getAll() : Observable<Sneaker[]> {
  return this.http.get<Sneaker[]>(URL)
      .pipe(
        tap((sneakers: Sneaker[]) => {
          sneakers.forEach(sn => sn.quantity = 0);
        })
      )
  }
}
