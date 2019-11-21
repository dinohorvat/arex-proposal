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
    { field: 'name', header: 'Name', type: true },
    { field: 'address', header: 'Address' },
    { field: 'price', header: 'Price', sortable: true },
    { field: 'type', header: 'Type', sortable: true, className: 'type' },
    { field: 'dueDate', header: 'Due Date', sortable: true }
  ];
  constructor() { }

  ngOnInit() {
  }

}
