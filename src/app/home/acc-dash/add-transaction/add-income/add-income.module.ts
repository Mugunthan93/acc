import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddIncomePage } from './add-income.page';
import { AngMaterialModule } from 'src/app/ang-material/ang-material.module';

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
    AngMaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddIncomePage]
})
export class AddIncomePageModule { }
