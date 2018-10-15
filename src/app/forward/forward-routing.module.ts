import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ForwardComponent} from "./forward.component";
import {CanActiveAuth} from "../util/active-auth";

const routes: Routes = [
  {
    path: '',
    component: ForwardComponent,
    data: {title: '转发'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForwardRoutingModule { }
