import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import {TaskRoutingModule} from "./task-routing.module";
import {ShareModule} from "../share/share.module";

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule,
    ShareModule
  ],
  declarations: [TaskComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class TaskModule { }
