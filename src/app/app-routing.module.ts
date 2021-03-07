import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent } from './components/sales/sales.component';

const routes: Routes = [{ path: 'sales', component: SalesComponent },
{ path: '**', redirectTo: '/sales', pathMatch: 'full' }, ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
