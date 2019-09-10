import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddTransactionPage } from './add-transaction.page';

const route: Routes = [
  {
    path: '',
    component: AddTransactionPage,
    children: [
      {
        path: 'income',
        loadChildren: './add-income/add-income.module#AddIncomePageModule'
      },
      {
        path: 'expense',
        loadChildren: './add-expense/add-expense.module#AddExpensePageModule'
      },
      {
        path: 'liability',
        loadChildren: './add-liability/add-liability.module#AddLiabilityPageModule'
      },
      {
        path: 'asset',
        loadChildren: './add-asset/add-asset.module#AddAssetPageModule'
      },
      {
        path: '',
        redirectTo: '/home/add/income',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/add/income',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports: [RouterModule]
})
export class AddTransactionRoutingModule { }
