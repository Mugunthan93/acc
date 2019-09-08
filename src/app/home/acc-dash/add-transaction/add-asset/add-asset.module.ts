import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddAssetPage } from './add-asset.page';
import { AddAssetMaterialModule } from './add-asset-material.module';

const routes: Routes = [
  {
    path: '',
    component: AddAssetPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddAssetMaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddAssetPage]
})
export class AddAssetPageModule { }
