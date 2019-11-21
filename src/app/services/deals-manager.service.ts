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

  fetchFavorites(): DealModel[] {
    return JSON.parse(localStorage.getItem('arex-favorites'));
  }

  setFavorite(deal: DealModel) {
    const favorites = this.fetchFavorites();
    if (!favorites) {
      localStorage.setItem('arex-favorites', JSON.stringify([deal]));
    } else {
      localStorage.setItem('arex-favorites', JSON.stringify([...favorites, deal]));
    }
  }

  // removeFavorite(dealId: string) {
  //   let favorites = this.fetchFavorites();
  //   favorites = favorites.find(item => item.id === dealId);
  // }
}
