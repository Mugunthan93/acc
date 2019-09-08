import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddIncomePage } from './add-income.page';
import { AddIncomeMaterialModule } from './add-income-material.module';

const routes: Routes = [
  {
    path: '',
    component: AddIncomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddIncomeMaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddIncomePage]
})
export class AddIncomePageModule { }
