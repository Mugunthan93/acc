import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';

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
    path: '',
    redirectTo: '/home/dashboard',
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
