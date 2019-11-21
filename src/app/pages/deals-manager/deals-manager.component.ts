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
  columnDefinition = [
    { field: 'name', header: 'Name', width: '30%' },
    { field: 'address', header: 'Address', type: 'address', width: '30%' },
    { field: 'price', header: 'Price', sortable: true, width: '20%' },
    { field: 'type', header: 'Type', type: 'type', sortable: true, className: 'type', width: '20%' },
    { field: 'dueDate', header: 'Due Date', sortable: true, width: '10%' },
    { header: '', type: 'favorites', width: '5%', className: 'favorites' }
  ];
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
