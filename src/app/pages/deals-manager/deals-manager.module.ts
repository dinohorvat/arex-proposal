import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule, BsDropdownModule, ModalModule, TabsModule } from 'ngx-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { CustomerRoutingModule } from './deals-manager-routing.module';
import { DealsManagerComponent } from './deals-manager.component';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { FavoritesModalComponent } from './favorites-modal/favorites-modal.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DealsManagerStatisticsComponent } from './statistics/statistics.component';
import { DealsManagerTableComponent } from './table/table.component';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartsModule,
        ReactiveFormsModule,
        CustomerRoutingModule,
        ModalModule.forRoot(),
        TabsModule,
        AccordionModule,
        TableModule,
        TooltipModule,
        DynamicDialogModule,
        BsDropdownModule,
        InputTextModule
    ],
    declarations: [
        DealsManagerComponent,
        FavoritesModalComponent,
        DealsManagerStatisticsComponent,
        DealsManagerTableComponent,
    ],
    entryComponents: [
        FavoritesModalComponent
    ],
    providers: [
    ]
})
export class DealsManagerModule {
}
