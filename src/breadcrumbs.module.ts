import {NgModule} from "@angular/core";
import {BreadcrumbComponent} from "./breadcrumbs.component";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {BreadcrumbsService} from "./breadcrumbs.service";
@NgModule({

    declarations: [
        BreadcrumbComponent
    ],
    providers: [
        BreadcrumbsService
    ],
    imports: [
        RouterModule,
        BrowserModule,
        CommonModule
    ],
    exports: [BreadcrumbComponent]
})
export class BreadcrumbsModule {
    constructor() {}

}

