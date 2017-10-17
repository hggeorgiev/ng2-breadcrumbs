"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var breadcrumbs_component_1 = require("./breadcrumbs.component");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var breadcrumbs_service_1 = require("./breadcrumbs.service");
var BreadcrumbsModule = (function () {
    function BreadcrumbsModule() {
    }
    BreadcrumbsModule.decorators = [
        { type: core_1.NgModule, args: [{
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
                },] },
    ];
    /** @nocollapse */
    BreadcrumbsModule.ctorParameters = function () { return []; };
    return BreadcrumbsModule;
}());
exports.BreadcrumbsModule = BreadcrumbsModule;
//# sourceMappingURL=breadcrumbs.module.js.map