import { Component, Input, OnDestroy } from '@angular/core';
import { DialogService } from 'primeng/api';
import { FavoritesModalComponent } from '../favorites-modal/favorites-modal.component';
import { DealModel } from '../../../models/deal.model';
import { Subscription } from 'rxjs';
import { DealsManagerService } from '../../../services/deals-manager.service';

@Component({
  selector: 'app-deals-manager-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class DealsManagerStatisticsComponent implements OnDestroy {
  @Input() set deals(deals: DealModel[]) {
    this._deals = deals;
    this.favoritesNumber = deals.filter((deal) => deal.favorite).length;
  }

  get deals() {
    return this._deals;
  }
  private _deals;

  public favoritesNumber: number;
  private actionSubscription: Subscription;

  constructor(private dialogService: DialogService, private dealsManagerService: DealsManagerService) {
    this.actionSubscription = this.dealsManagerService.$actionEmitter.subscribe((res) => {
      if (res === ('showFavorites')) {
        this.showFavorites();
      }
    });
  }

  showFavorites() {
    this.dialogService.open(FavoritesModalComponent, {
      header: 'Favorites',
      data: this.deals.filter((item) => item.favorite),
      width: '50%'
    });
  }

  ngOnDestroy(): void {
    if (this.actionSubscription) {
      this.actionSubscription.unsubscribe();
    }
  }

}
