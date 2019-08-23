import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccDashPage } from './acc-dash.page';

const dashRoute: Routes = [
  {
    path: '',
    component: AccDashPage,
    children: []
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(dashRoute)
  ],
  exports: [RouterModule]
})
export class AccDashRoutingModule { }
