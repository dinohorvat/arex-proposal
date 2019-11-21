import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DealsManagerComponent } from './deals-manager.component';


const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Deals Manager'
        },
        component: DealsManagerComponent
    }
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule {
}
