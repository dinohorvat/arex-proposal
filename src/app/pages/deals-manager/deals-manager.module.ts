import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule, ModalModule, TabsModule } from 'ngx-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { CustomerRoutingModule } from './deals-manager-routing.module';
import { DealsManagerComponent } from './deals-manager.component';

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
    ],
    declarations: [
        DealsManagerComponent,
    ],
    providers: []
})
export class DealsManagerModule {
}
