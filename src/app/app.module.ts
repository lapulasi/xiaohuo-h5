import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule, RouterStateSnapshot} from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {NoopInterceptor} from "./service/noop-interceptor";
import {HTTP_INTERCEPTORS, HttpClientModule, HttpHandler} from "@angular/common/http";
import { EditComponent } from './article/edit/edit.component';
import {FormsModule} from "@angular/forms";
import {WebHttpClient} from "./service/web.httpclient";
import { DetailComponent } from './article/detail/detail.component';
import {ShareModule} from "./share/share.module";
import { ShareListComponent } from './article/share-list/share-list.component';
import { ViewListComponent } from './article/view-list/view-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    EditComponent,
    DetailComponent,
    ShareListComponent,
    ViewListComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ShareModule
  ],
  providers: [
    WebHttpClient,
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    {provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
