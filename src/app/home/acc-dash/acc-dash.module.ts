import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccDashPage } from './acc-dash.page';
import { AccDashRoutingModule } from './acc-dash-routing.module';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';

import { AccDashMaterialModule } from './acc-dash-material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AccDashRoutingModule,
    AccDashMaterialModule,
  ],
  declarations: [
    AccDashPage,
    AddTransactionComponent
  ],
  entryComponents: [AddTransactionComponent]
})
export class AccDashPageModule { }
