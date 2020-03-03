import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoriesComponent} from './categories/categories.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppComponent} from './app.component';
import {ExpendituresComponent} from './expenditures/expenditures.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'expenditures', component: ExpendituresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
