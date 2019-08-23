import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccDashPage } from './acc-dash.page';
import { MatTableModule } from '@angular/material/table';
import { AccDashRoutingModule } from './acc-dash-routing.module';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccDashRoutingModule,
    MatTableModule
  ],
  declarations: [
    AccDashPage,
    AddTransactionComponent
  ],
  entryComponents: [AddTransactionComponent]
})
export class AccDashPageModule { }
