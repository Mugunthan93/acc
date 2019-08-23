import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';

const homeRoute = [
  {
    path: 'userId',
    component: HomePage,
    children: [
      {
        path: 'table',
        loadChildren: './acc-table/acc-table.module#AccTablePageModule'
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
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/userId/table',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(homeRoute)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
