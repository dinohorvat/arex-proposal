import { Component, Input, OnInit } from '@angular/core';
import { DealModel } from '../../../models/deal.model';

@Component({
  selector: 'app-deals-manager-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class DealsManagerTableComponent implements OnInit {
  @Input() deals: DealModel[];
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
