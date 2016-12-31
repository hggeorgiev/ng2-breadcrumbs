"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
require("rxjs/add/operator/filter");
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
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ROUTE_DATA_BREADCRUMB = "breadcrumb";
        var ROUTE_PARAM_BREADCRUMB = "breadcrumb";
        var PREFIX_BREADCRUMB = "prefixBreadcrumb";
        //subscribe to the NavigationEnd event
        this.router.events.filter(function (event) { return event instanceof router_1.NavigationEnd; }).subscribe(function (event) {
            //reset currentBreadcrumbs
            _this.currentBreadcrumbs = [];
            //get the root of the current route
            var currentRoute = _this.activatedRoute.root;
            //set the url to an empty string
            var url = "";
            //iterate from activated route to children
            while (currentRoute.children.length > 0) {
                var childrenRoutes = currentRoute.children;
                var breadCrumbLabel = '';
                //iterate over each children
                childrenRoutes.forEach(function (route) {
                    // Set currentRoute to this route
                    currentRoute = route;
                    // Verify this is the primary route
                    if (route.outlet !== router_1.PRIMARY_OUTLET) {
                        return;
                    }
                    /*
                     Verify the custom data property "breadcrumb"
                     is specified on the route or in its parameters.

                     Route parameters take precedence over route data
                     attributes.
                     */
                    if (route.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                        breadCrumbLabel = route.snapshot.data[ROUTE_DATA_BREADCRUMB];
                    }
                    else if (route.snapshot.params.hasOwnProperty(ROUTE_PARAM_BREADCRUMB)) {
                        breadCrumbLabel = route.snapshot.params['breadcrumb'].replace(/_/g, " ");
                    }
                    else {
                        //fallback to empty string
                        breadCrumbLabel = 'empty_breadcrumb_name';
                    }
                    // Get the route's URL segment
                    var routeURL = route.snapshot.url.map(function (segment) { return segment.path; }).join("/");
                    url += "/" + routeURL;
                    // Cannot have parameters on a root route
                    if (routeURL.length == 0) {
                        route.snapshot.params = {};
                    }
                    // Add breadcrumb
                    var breadcrumb = {
                        label: breadCrumbLabel,
                        params: route.snapshot.params,
                        url: url
                    };
                    // Add the breadcrumb as 'prefixed'. It will appear before all breadcrumbs
                    if (route.snapshot.data.hasOwnProperty(PREFIX_BREADCRUMB)) {
                        _this.breadcrumbService.storePrefixed(breadcrumb);
                    }
                    else {
                        _this.currentBreadcrumbs.push(breadcrumb);
                    }
                });
                _this.breadcrumbService.store(_this.currentBreadcrumbs);
            }
        });
    };
    BreadcrumbComponent = __decorate([
        core_1.Component({
            selector: "breadcrumb",
        })
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());
exports.BreadcrumbComponent = BreadcrumbComponent;
