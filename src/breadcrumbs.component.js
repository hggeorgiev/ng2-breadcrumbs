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
    function BreadcrumbComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.breadcrumbs = [];
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ROUTE_DATA_BREADCRUMB = "breadcrumb";
        //subscribe to the NavigationEnd event
        this.router.events.filter(function (event) { return event instanceof router_1.NavigationEnd; }).subscribe(function (event) {
            //reset breadcrumbs
            _this.breadcrumbs = [];
            //get the root route
            var currentRoute = _this.activatedRoute.root;
            //set the url to an empty string
            var url = "";
            //iterate from activated route to children
            while (currentRoute.children.length > 0) {
                var childrenRoutes = currentRoute.children;
                //iterate over each children
                childrenRoutes.forEach(function (route) {
                    //set currentRoute to this route
                    currentRoute = route;
                    //verify this is the primary route
                    if (route.outlet !== router_1.PRIMARY_OUTLET) {
                        return;
                    }
                    //verify the custom data property "breadcrumb" is specified on the route
                    if (!route.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                        return;
                    }
                    //get the route's URL segment
                    var routeURL = route.snapshot.url.map(function (segment) { return segment.path; }).join("/");
                    //append route URL to URL
                    url += "/" + routeURL;
                    //add breadcrumb
                    var breadcrumb = {
                        name: route.snapshot.data[ROUTE_DATA_BREADCRUMB],
                        label: route.snapshot.params.name.replace(/_/g, " "),
                        params: route.snapshot.params,
                        url: url
                    };
                    _this.breadcrumbs.push(breadcrumb);
                });
            }
        });
    };
    BreadcrumbComponent = __decorate([
        core_1.Component({
            selector: "breadcrumb",
            template: require('./breadcrumbs.template.pug'),
            styles: require(['./breadcrumbs.styles.scss'])
        })
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());
exports.BreadcrumbComponent = BreadcrumbComponent;
