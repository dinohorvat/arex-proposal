import { Component, OnDestroy, OnInit } from '@angular/core';
import { DealsManagerService } from '../../services/deals-manager.service';
import { DealModel } from '../../models/deal.model';
import { Subscription } from 'rxjs';
import { columnTableDefinition } from './columns.definition';

@Component({
  selector: 'app-deals-manager',
  templateUrl: './deals-manager.component.html',
  styleUrls: ['./deals-manager.component.scss']
})
export class DealsManagerComponent implements OnInit, OnDestroy {
  private favoritesChangeSubscription: Subscription;
  columnDefinition = columnTableDefinition;
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
