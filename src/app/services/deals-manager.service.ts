import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DealModel } from '../models/deal.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Storage } from '../enums/arex.enum';

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
      localStorage.setItem(Storage.Favorites, JSON.stringify([deal]));
    } else {
      localStorage.setItem(Storage.Favorites, JSON.stringify([...favorites, deal]));
    }
  }

  removeFavorite(dealId: string) {
    const favorites = this.fetchFavorites();
    favorites.splice(favorites.findIndex(item => item.id === dealId), 1);
    localStorage.setItem(Storage.Favorites, JSON.stringify(favorites));
  }
}
