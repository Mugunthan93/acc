import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddLiabilityPage } from './add-liability.page';
import { AngMaterialModule } from 'src/app/ang-material/ang-material.module';

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
    AngMaterialModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddLiabilityPage]
})
export class AddLiabilityPageModule { }
