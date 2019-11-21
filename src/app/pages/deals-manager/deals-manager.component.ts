import { Component, OnInit } from '@angular/core';
import { DealsManagerService } from '../../services/deals-manager.service';
import { DealModel } from '../../models/deal.model';
import { DialogService } from 'primeng/api';

@Component({
  selector: 'app-deals-manager',
  templateUrl: './deals-manager.component.html',
  styleUrls: ['./deals-manager.component.scss']
})
export class DealsManagerComponent implements OnInit {

  deals: DealModel[] = [];

  constructor(private dealsManagerService: DealsManagerService, private dialogService: DialogService) { }

  ngOnInit() {
    this.getDeals();
  }

  getDeals() {
    this.dealsManagerService.fetchDeals().subscribe((res) => {
      this.deals = res;
    });
  }


  showFavorites() {

  }

}
