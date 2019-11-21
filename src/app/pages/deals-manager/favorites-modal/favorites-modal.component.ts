import { Component, OnInit } from '@angular/core';
import { DealModel } from '../../../models/deal.model';

@Component({
  selector: 'app-favorites-modal',
  templateUrl: './favorites-modal.component.html',
  styleUrls: ['./favorites-modal.component.scss']
})
export class FavoritesModalComponent implements OnInit {
  deals: DealModel[];
  columnDefinition = [
    { field: 'name', header: 'Name', width: '30%' },
    { field: 'address', header: 'Address', type: 'address', width: '30%' },
    { field: 'price', header: 'Price', sortable: true, width: '20%' },
    { field: 'type', header: 'Type', type: 'type', sortable: true, className: 'type', width: '20%' },
    { field: 'dueDate', header: 'Due Date', sortable: true, width: '10%' },
    { header: '', type: 'favorites', width: '5%', className: 'favorites' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
