import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule } from '@angular/router';
import { SettingComponent } from './setting/setting.component';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  { path: '',  redirectTo: '/home', pathMatch: 'full' },
  {path: 'setting', component: SettingComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'home', component: HomeComponent},
  {path: 'addexpense', component: AddExpenseComponent},
  {path: 'delete', component: DeleteComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
