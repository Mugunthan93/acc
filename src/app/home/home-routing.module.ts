import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { AddTransactionPage } from './acc-dash/add-transaction/add-transaction.page';

const homeRoute = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'dashboard',
        loadChildren: './acc-dash/acc-dash.module#AccDashPageModule'
      },
      {
        path: 'stats',
        loadChildren: './acc-stats/acc-stats.module#AccStatsPageModule'
      },
      {
        path: 'friends',
        loadChildren: './acc-friends/acc-friends.module#AccFriendsPageModule'
      },
      {
        path: 'groups',
        loadChildren: './acc-groups/acc-groups.module#AccGroupsPageModule'
      },
      {
        path: 'settings',
        loadChildren: './acc-settings/acc-settings.module#AccSettingsPageModule'
      },
      {
        path: '',
        redirectTo: '/home/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'add',
    loadChildren: './acc-dash/add-transaction/add-transaction.module#AddTransactionPageModule'
  },
  {
    path: '',
    redirectTo: '/home/dashboard',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forChild(homeRoute)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
