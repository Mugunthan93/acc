import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTransactionPage } from './add-transaction.page';
import { AddTransactionMaterialModule } from './add-transaction-material.module';
import { AddTransactionRoutingModule } from './add-transaction-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddTransactionMaterialModule,
    AddTransactionRoutingModule
  ],
  declarations: [AddTransactionPage]
})
export class AddTransactionPageModule { }
