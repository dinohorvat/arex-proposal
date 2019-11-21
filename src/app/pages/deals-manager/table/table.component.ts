import { Component, Input } from '@angular/core';
import { DealModel } from '../../../models/deal.model';
import { DealsManagerService } from '../../../services/deals-manager.service';

@Component({
  selector: 'app-deals-manager-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class DealsManagerTableComponent {
  @Input() deals: DealModel[];
  @Input() columnDefinition;

  constructor(private dealsManagerService: DealsManagerService) { }

  toggleFavorite(deal: DealModel) {
    deal.favorite = !deal.favorite;
    if (deal.favorite) {
      this.dealsManagerService.setFavorite(deal);
    } else {
      this.dealsManagerService.removeFavorite(deal.id);
    }
  }

}
