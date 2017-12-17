"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var operators_1 = require("rxjs/operators");
var breadcrumbs_service_1 = require("./breadcrumbs.service");
var breadcrumbs_types_1 = require("./breadcrumbs-types");
var hasBreadcrumb = function (route) {
    return route.routeConfig && route.routeConfig.data && route.routeConfig.data[breadcrumbs_types_1.BreadcrumbsTypes.ROUTE_DATA_BREADCRUMB];
};
var BreadcrumbComponent = (function () {
    function BreadcrumbComponent(breadcrumbService, activatedRoute, router) {
        var _this = this;
        this.breadcrumbService = breadcrumbService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        breadcrumbService.get().subscribe(function (breadcrumbs) {
            _this.breadcrumbs = breadcrumbs;
        });
    }
    BreadcrumbComponent.prototype.hasParams = function (breadcrumb) {
        return Object.keys(breadcrumb.params).length ? [breadcrumb.url, breadcrumb.params] : [breadcrumb.url];
    };
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ROUTE_PARAM_BREADCRUMB = 'breadcrumb';
        // subscribe to the NavigationEnd event
        this.router.events.pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; })).subscribe(function (event) {
            // reset currentBreadcrumbs
            _this.currentBreadcrumbs = [];
            // get the root of the current route
            var currentRoute = _this.activatedRoute.root;
            // set the url to an empty string
            var url = "";
            // iterate from activated route to children
            while (currentRoute.children.length > 0) {
                var childrenRoutes = currentRoute.children;
                // iterate over each children
                childrenRoutes.forEach(function (route) {
                    // Set currentRoute to this route
                    currentRoute = route;
                    // Verify this is the primary route
                    if (route.outlet !== router_1.PRIMARY_OUTLET) {
                        return;
                    }
                    var hasDynamicBreadcrumb = route.snapshot.params.hasOwnProperty(ROUTE_PARAM_BREADCRUMB);
                    if (hasBreadcrumb(route) || hasDynamicBreadcrumb) {
                        url += _this.breadcrumbService.getUrlForRoute(route);
                        var breadCrumb = _this.breadcrumbService.getBreadCrumbData(route.snapshot.data, route.snapshot.params[ROUTE_PARAM_BREADCRUMB]);
                        // Add breadcrumb
                        var breadcrumb = {
                            label: breadCrumb.label,
                            params: breadCrumb.params || {},
                            url: breadCrumb.url || url,
                            className: breadCrumb.className,
                            prefix: breadCrumb.prefix
                        };
                        // Add the breadcrumb as 'prefixed'. It will appear before all breadcrumbs
                        if (breadCrumb.prefix) {
                            _this.breadcrumbService.storePrefixed(breadcrumb);
                        }
                        else {
                            _this.currentBreadcrumbs.push(breadcrumb);
                        }
                    }
                });
                _this.breadcrumbService.store(_this.currentBreadcrumbs);
            }
        });
    };
    BreadcrumbComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "breadcrumb",
                    template: "\n        <div [ngClass]=\"{ 'container-fluid': allowBootstrap, 'fluid-bread': true}\">\n            <div class=\"container\">\n                <ol [ngClass]=\"{ 'breadcrumb': allowBootstrap}\" class=\"{{addClass ? '' + addClass : ''}}\">\n                    <li *ngFor=\"let breadcrumb of breadcrumbs; let last = last\"\n                        class=\"{{breadcrumb.className}}\"\n                        [ngClass]=\"{ 'breadcrumb-item': allowBootstrap, 'list': true, 'active': last }\">\n                        <a *ngIf=\"!last\" [routerLink]=\"hasParams(breadcrumb)\">\n                            {{breadcrumb.label}}\n                        </a>\n                        <span *ngIf=\"last\">{{ breadcrumb.label }}</span>\n                    </li>\n                </ol>\n            </div>\n        </div>",
                    styles: ["\n        .fluid-bread {\n            background-color: white;\n        }\n\n        .breadcrumb {\n            background-color: white;\n            padding: 4px;\n            margin-bottom: 0;\n        }"],
                    encapsulation: core_1.ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: breadcrumbs_service_1.BreadcrumbsService, },
        { type: router_1.ActivatedRoute, },
        { type: router_1.Router, },
    ]; };
    BreadcrumbComponent.propDecorators = {
        'allowBootstrap': [{ type: core_1.Input },],
        'addClass': [{ type: core_1.Input },],
    };
    return BreadcrumbComponent;
}());
exports.BreadcrumbComponent = BreadcrumbComponent;
//# sourceMappingURL=breadcrumbs.component.js.map