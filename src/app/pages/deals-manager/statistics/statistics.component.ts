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
  @Input() deals: DealModel[];
  constructor(private dialogService: DialogService) { }

  showFavorites() {
    this.dialogService.open(FavoritesModalComponent, {
      header: 'Favorites',
      data: this.deals,
      width: '50%'
    });
  }

}
