import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Sneaker } from '../models/sneaker.model';
import { SneakerDTO } from '../models/sneaker.dto';

const BASE_URL: string =
  'https://6871b54776a5723aacd295cf.mockapi.io/api/v1/sneakers';

@Injectable({
  providedIn: 'root',
})
export class SneakerDataService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Sneaker[]> {
    return this.http.get<Sneaker[]>(BASE_URL).pipe(
      tap((sneakers: Sneaker[]) => {
        sneakers.forEach((sn) => (sn.quantity = 0));
      })
    );
  }

  createSneaker(sneaker: SneakerDTO): Observable<Sneaker> {
    return this.http.post<Sneaker>(
      BASE_URL,
      sneaker
    );
  }
}
