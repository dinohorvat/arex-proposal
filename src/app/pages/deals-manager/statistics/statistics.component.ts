import { Component, Input } from '@angular/core';
import { DialogService } from 'primeng/api';
import { FavoritesModalComponent } from '../favorites-modal/favorites-modal.component';
import { DealModel } from '../../../models/deal.model';

@Component({
  selector: 'app-deals-manager-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class DealsManagerStatisticsComponent {
  @Input() set deals(deals: DealModel[]) {
    this._deals = deals;
    this.favoritesNumber = deals.filter((deal) => deal.favorite).length;
  }

  get deals() {
    return this._deals;
  }
  private _deals;

  public favoritesNumber: number;
  constructor(private dialogService: DialogService) { }

  showFavorites() {
    this.dialogService.open(FavoritesModalComponent, {
      header: 'Favorites',
      data: this.deals,
      width: '50%'
    });
  }

}
