import { Component, Input } from '@angular/core';
import { DealModel } from '../../../models/deal.model';
import { DealsManagerService } from '../../../services/deals-manager.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-deals-manager-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class DealsManagerTableComponent {
  @Input() deals: DealModel[];
  @Input() columnDefinition;
  @Input() isModal = false;

  constructor(private dealsManagerService: DealsManagerService) { }

  toggleFavorite(deal: DealModel) {
    deal.favorite = !deal.favorite;
    if (deal.favorite) {
      this.dealsManagerService.setFavorite(deal);
    } else {
      this.dealsManagerService.removeFavorite(deal.id);
    }
    this.deals = [...this.deals];
    this.dealsManagerService.$favoritesChangeEmitter.next(this.deals);
  }

  searchFilter(table: Table, { value }: any) {
    if (!this.isModal) {
      table.globalFilterFields = ['name', 'address', 'price', 'type', 'dueDate'];
    } else {
      table.globalFilterFields = ['name', 'type'];
    }
    table.filterGlobal(value, 'contains');
  }

}
