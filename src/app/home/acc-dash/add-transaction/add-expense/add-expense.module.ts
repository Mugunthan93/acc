import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddExpensePage } from './add-expense.page';
import { AddExpenseMaterialModule } from './add-expense-material.module';

const routes: Routes = [
  {
    path: '',
    component: AddExpensePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddExpenseMaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddExpensePage]
})
export class AddExpensePageModule { }
