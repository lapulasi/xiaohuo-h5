import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForwardRoutingModule } from './forward-routing.module';
import { ForwardComponent } from './forward.component';
import {ShareModule} from "../share/share.module";

@NgModule({
  imports: [
    CommonModule,
    ForwardRoutingModule,
    ShareModule
  ],
  declarations: [ForwardComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ForwardModule { }
