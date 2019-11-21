import { Component, OnInit } from '@angular/core';
import { DealsManagerService } from '../../services/deals-manager.service';
import { DealModel } from '../../models/deal.model';

@Component({
  selector: 'app-deals-manager',
  templateUrl: './deals-manager.component.html',
  styleUrls: ['./deals-manager.component.css']
})
export class DealsManagerComponent implements OnInit {

  deals: DealModel[];
  constructor(private dealsManagerService: DealsManagerService) { }

  ngOnInit() {
    this.getDeals();
  }

  getDeals() {
    this.dealsManagerService.fetchDeals().subscribe((res) => {
      this.deals = res;
    });
  }

}
