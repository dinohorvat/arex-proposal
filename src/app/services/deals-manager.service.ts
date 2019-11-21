import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DealModel } from '../models/deal.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DealsManagerService {
  private jsonUrl = 'assets/deals.json';

  constructor(private http: HttpClient) {}

    fetchDeals(): Observable<DealModel[]> {
      return this.http.get<DealModel[]>(this.jsonUrl);
  }
}
