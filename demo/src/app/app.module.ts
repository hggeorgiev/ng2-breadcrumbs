import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {ROUTES} from "./app.routes";
import {RouterModule} from "@angular/router";
import {BreadcrumbsModule} from "ng2-breadcrumbs";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpModule,
    RouterModule.forRoot(ROUTES),
    BreadcrumbsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
