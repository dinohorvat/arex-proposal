import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from 'primeng/api';
import { FavoritesModalComponent } from '../favorites-modal/favorites-modal.component';

@Component({
  selector: 'app-deals-manager-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class DealsManagerStatisticsComponent {
  @Input() totalDeals: number;
  constructor(private dialogService: DialogService) { }

  showFavorites() {
    this.dialogService.open(FavoritesModalComponent, {
      header: 'Favorites',
      width: '50%'
    });
  }

}
