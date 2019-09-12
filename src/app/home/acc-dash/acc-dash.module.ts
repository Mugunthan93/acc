import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccDashPage } from './acc-dash.page';
import { AccDashRoutingModule } from './acc-dash-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AccDashRoutingModule,
  ],
  declarations: [
    AccDashPage,
  ],
  entryComponents: []
})
export class AccDashPageModule { }
