import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddIncomePage } from './add-income.page';
import { AngMaterialModule } from 'src/app/ang-material/ang-material.module';


import { Contacts } from '@ionic-native/contacts/ngx';

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
  providers: [Contacts],
  declarations: [AddIncomePage]
})
export class AddIncomePageModule { }
