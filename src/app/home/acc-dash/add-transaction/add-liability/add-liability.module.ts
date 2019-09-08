import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddLiabilityPage } from './add-liability.page';
import { AddLiabilityMaterialModule } from './add-liability-material.module';

const routes: Routes = [
  {
    path: '',
    component: AddLiabilityPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AddLiabilityMaterialModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddLiabilityPage]
})
export class AddLiabilityPageModule { }
