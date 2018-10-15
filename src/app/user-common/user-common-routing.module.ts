import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutUsComponent} from "./about-us/about-us.component";
import {CustomerServiceComponent} from "./customer-service/customer-service.component";
import {InviteComponent} from "./invite/invite.component";
import {AccountComponent} from "./account/account.component";

const routes: Routes = [
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'service',
    component: CustomerServiceComponent
  },
  {
    path: 'invite',
    component: InviteComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserCommonRoutingModule { }
