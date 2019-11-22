import { Component, OnDestroy, OnInit } from '@angular/core';
import { DealsManagerService } from '../../services/deals-manager.service';
import { DealModel } from '../../models/deal.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-deals-manager',
  templateUrl: './deals-manager.component.html',
  styleUrls: ['./deals-manager.component.scss']
})
export class DealsManagerComponent implements OnInit, OnDestroy {
  private favoritesChangeSubscription: Subscription;
  columnDefinition = [
    { field: 'name', header: 'Name', width: '30%' },
    { field: 'address', header: 'Address', type: 'address', width: '30%' },
    { field: 'price', header: 'Price', sortable: true, width: '20%' },
    { field: 'type', header: 'Type', type: 'type', sortable: true, className: 'type', width: '20%' },
    { field: 'dueDate', header: 'Due Date', sortable: true, width: '10%' },
    { header: '', type: 'favorites', width: '5%', className: 'favorites' }
  ];
  deals: DealModel[] = [];

  constructor(private dealsManagerService: DealsManagerService) { }

  ngOnInit() {
    this.getDeals();
    this.favoritesChangeSubscription = this.dealsManagerService.$favoritesChangeEmitter.subscribe((res) => {
      this.deals = res;
    });
  }

  getDeals() {
    this.dealsManagerService.fetchDeals().subscribe((res) => {
      this.deals = res;
    });
  }

  ngOnDestroy(): void {
    if (this.favoritesChangeSubscription) {
      this.favoritesChangeSubscription.unsubscribe();
    }
  }

}
