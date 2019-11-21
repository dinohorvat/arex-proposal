import { Component, OnInit } from '@angular/core';
import { DealsManagerService } from '../../services/deals-manager.service';
import { DealModel } from '../../models/deal.model';

@Component({
  selector: 'app-deals-manager',
  templateUrl: './deals-manager.component.html',
  styleUrls: ['./deals-manager.component.scss']
})
export class DealsManagerComponent implements OnInit {

  deals: DealModel[];
  totalDeals: number;
  columnDefinition = [
    { field: 'name', header: 'Name', type: true },
    { field: 'address', header: 'Address' },
    { field: 'price', header: 'Price', sortable: true },
    { field: 'type', header: 'Type', sortable: true },
    { field: 'dueDate', header: 'Due Date', sortable: true }
  ];
  constructor(private dealsManagerService: DealsManagerService) { }

  ngOnInit() {
    this.getDeals();
  }

  getDeals() {
    this.dealsManagerService.fetchDeals().subscribe((res) => {
      this.deals = res;
      this.totalDeals = res.length;
    });
  }

}
