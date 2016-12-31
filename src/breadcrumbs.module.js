"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var breadcrumbs_component_1 = require("./breadcrumbs.component");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var breadcrumbs_service_1 = require("./breadcrumbs.service");
var BreadcrumbModule = (function () {
    function BreadcrumbModule() {
    }
    BreadcrumbModule = __decorate([
        core_1.NgModule({
            declarations: [
                breadcrumbs_component_1.BreadcrumbComponent
            ],
            providers: [
                breadcrumbs_service_1.BreadcrumbsService
            ],
            imports: [
                router_1.RouterModule,
                platform_browser_1.BrowserModule,
                common_1.CommonModule
            ],
            exports: [breadcrumbs_component_1.BreadcrumbComponent]
        })
    ], BreadcrumbModule);
    return BreadcrumbModule;
}());
exports.BreadcrumbModule = BreadcrumbModule;
