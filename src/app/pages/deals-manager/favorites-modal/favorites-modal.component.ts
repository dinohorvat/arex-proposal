import { Component, OnInit } from '@angular/core';
import { DealModel } from '../../../models/deal.model';
import { DynamicDialogConfig } from 'primeng/api';
import { columnModalDefinition } from '../columns.definition';

@Component({
  selector: 'app-favorites-modal',
  templateUrl: './favorites-modal.component.html',
  styleUrls: ['./favorites-modal.component.scss']
})
export class FavoritesModalComponent implements OnInit {
  deals: DealModel[];
  columnDefinition = columnModalDefinition;
  constructor(private config: DynamicDialogConfig) { }

  ngOnInit() {
    this.deals = this.config.data;
  }


}
