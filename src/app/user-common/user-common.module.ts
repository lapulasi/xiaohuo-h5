import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCommonRoutingModule } from './user-common-routing.module';
import {AboutUsComponent} from "./about-us/about-us.component";
import {CustomerServiceComponent} from "./customer-service/customer-service.component";
import {InviteComponent} from "./invite/invite.component";
import { AccountComponent } from './account/account.component';

@NgModule({
  imports: [
    CommonModule,
    UserCommonRoutingModule
  ],
  declarations: [AboutUsComponent, CustomerServiceComponent, InviteComponent, AccountComponent]
})
export class UserCommonModule { }
