import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthPage } from './auth.page';

const authRoute: Routes = [
  {
    path: '',
    component: AuthPage,
    children: [
      { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
      { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
      {
        path: '',
        redirectTo: '/auth/signup',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/auth/signup',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoute)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
