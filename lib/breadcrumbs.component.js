"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var operators_1 = require("rxjs/operators");
var breadcrumbs_service_1 = require("./breadcrumbs.service");
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
        var ROUTE_DATA_BREADCRUMB = "breadcrumb";
        var ROUTE_PARAM_BREADCRUMB = "breadcrumb";
        var PREFIX_BREADCRUMB = "prefixBreadcrumb";
        // subscribe to the NavigationEnd event
        this.router.events.pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; })).subscribe(function (event) {
            // reset currentBreadcrumbs
            _this.currentBreadcrumbs = [];
            // get the root of the current route
            var currentRoute = _this.activatedRoute.root;
            // set the url to an empty string
            var url = "";
            var _loop_1 = function () {
                var childrenRoutes = currentRoute.children;
                var breadCrumbLabel = "";
                // iterate over each children
                childrenRoutes.forEach(function (route) {
                    // Set currentRoute to this route
                    currentRoute = route;
                    // Verify this is the primary route
                    if (route.outlet !== router_1.PRIMARY_OUTLET) {
                        return;
                    }
                    var hasData = (route.routeConfig && route.routeConfig.data);
                    var breadcrumbData = route.snapshot.data[ROUTE_DATA_BREADCRUMB] || {};
                    var hasDynamicBreadcrumb = route.snapshot.params.hasOwnProperty(ROUTE_PARAM_BREADCRUMB);
                    if (hasData || hasDynamicBreadcrumb) {
                        /*
                         Verify the custom data property "breadcrumb"
                         is specified on the route or in its parameters.

                         Route parameters take precedence over route data
                         attributes.
                         */
                        if (hasDynamicBreadcrumb) {
                            breadCrumbLabel = route.snapshot.params[ROUTE_PARAM_BREADCRUMB].replace(/_/g, " ");
                        }
                        else if (breadcrumbData.dynamicBreadcrumb) {
                            breadCrumbLabel = route.snapshot.params[breadcrumbData.dynamicBreadcrumb];
                        }
                        else if (breadcrumbData.breadcrumb) {
                            breadCrumbLabel = breadcrumbData.breadcrumb;
                        }
                        // Get the route's URL segment
                        var routeURL = route.snapshot.url.map(function (segment) { return segment.path; }).join("/");
                        url += "/" + routeURL;
                        // Add breadcrumb
                        var breadcrumb = {
                            label: breadCrumbLabel,
                            params: {},
                            url: url,
                            className: breadcrumbData.className
                        };
                        // Add the breadcrumb as 'prefixed'. It will appear before all breadcrumbs
                        if (route.snapshot.data.hasOwnProperty(PREFIX_BREADCRUMB)) {
                            _this.breadcrumbService.storePrefixed(breadcrumb);
                        }
                        else {
                            _this.currentBreadcrumbs.push(breadcrumb);
                        }
                    }
                });
                _this.breadcrumbService.store(_this.currentBreadcrumbs);
            };
            // iterate from activated route to children
            while (currentRoute.children.length > 0) {
                _loop_1();
            }
        });
    };
    BreadcrumbComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "breadcrumb",
                    template: "\n        <div [ngClass]=\"{ 'container-fluid': allowBootstrap, 'fluid-bread': true}\">\n            <div class=\"container\">\n                <ol [ngClass]=\"{ 'breadcrumb': allowBootstrap}\" class=\"{{addClass ? '' + addClass : ''}}\">\n                    <li *ngFor=\"let breadcrumb of breadcrumbs; let last = last\"\n                        class=\"{{breadcrumb.className ? '' + breadcrumb.className : ''}}\"\n                        [ngClass]=\"{ 'breadcrumb-item': allowBootstrap, 'list': true, 'active': last }\">\n                        <a *ngIf=\"!last\" [routerLink]=\"hasParams(breadcrumb)\">\n                            {{breadcrumb.label}}\n                        </a>\n                        <span *ngIf=\"last\">{{ breadcrumb.label }}</span>\n                    </li>\n                </ol>\n            </div>\n        </div>",
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