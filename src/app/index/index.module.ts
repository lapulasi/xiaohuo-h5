import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule } from '@angular/common';
import {ShareModule} from "../share/share.module";
import {IndexComponent} from "./index.component";
import {IndexRoutingModule} from "./index-routing.module";

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    ShareModule
  ],
  declarations: [IndexComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class IndexModule { }
