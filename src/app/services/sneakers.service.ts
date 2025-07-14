import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sneaker } from '../models/sneakers.model';

@Injectable({ providedIn: 'root' })
export class SneakersService {
  private readonly API = 'https://6871b54776a5723aacd295cf.mockapi.io/api/v1/sneakers';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Sneaker[]> {
    return this.http.get<Sneaker[]>(this.API);
  }

  getById(id: string): Observable<Sneaker> {
    return this.http.get<Sneaker>(`${this.API}/${id}`);
  }
}
