import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {StoresComponent} from './stores/stores.component';
import {storeRoutes} from "./stores.routes";
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(storeRoutes),
    // NgbModule
  ],
  declarations: [StoresComponent]
})
export class StoresModule {
}
