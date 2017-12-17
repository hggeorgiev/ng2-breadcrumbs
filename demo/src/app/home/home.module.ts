import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home.component";
import {RouterModule, Routes} from "@angular/router";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      // breadcrumb: 'hello'
    }
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HOME_ROUTES),
    NgbModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
}
