import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home.component";
import {RouterModule, Routes} from "@angular/router";

const HOME_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    }

];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(HOME_ROUTES),
    ],
    declarations: [HomeComponent]
})
export class HomeModule {
}
