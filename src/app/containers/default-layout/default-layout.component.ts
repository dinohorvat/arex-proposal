import {Component } from '@angular/core';
import { navItems } from '../../_nav';
import { DealsManagerService } from '../../services/deals-manager.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(private dealsManagerService: DealsManagerService) {}
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  showFavorites() {
    this.dealsManagerService.$actionEmitter.next('showFavorites');
  }
}
