import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DealModel } from '../models/deal.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DealsManagerService {
  private jsonUrl = 'assets/deals.json';

  constructor(private http: HttpClient) {}

  fetchDeals(): Observable<DealModel[]> {
    const favorites = this.fetchFavorites();
    return this.http.get<DealModel[]>(this.jsonUrl).pipe(map((deals) => {
        deals.forEach((deal) => {
          if (favorites.some((favorite) => deal.id === favorite.id)) {
            deal.favorite = true;
          }
        });
        return deals;
      }));
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
