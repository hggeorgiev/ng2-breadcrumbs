"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var rxjs_1 = require("rxjs");
var BreadcrumbsService = (function () {
    function BreadcrumbsService() {
        this.prefixedBreadcrumbs = [];
        this.breadcrumbs = [];
        this.breadcrumbsSource = new rxjs_1.Subject();
        this.breadcrumbsChanged$ = this.breadcrumbsSource.asObservable();
        if (localStorage.getItem('prefixedBreadcrumbs') != null) {
            this.prefixedBreadcrumbs = (JSON.parse(localStorage.getItem('prefixedBreadcrumbs')));
        }
    }
    //Store the breadcrumbs of the current route
    BreadcrumbsService.prototype.store = function (breadcrumbs) {
        this.breadcrumbs = breadcrumbs;
        var allBreadcrumbs = this.prefixedBreadcrumbs.concat(this.breadcrumbs);
        this.breadcrumbsSource.next(allBreadcrumbs);
    };
    // Add a prefixed breadcrumb
    BreadcrumbsService.prototype.storePrefixed = function (breadcrumb) {
        this.storeIfUnique(breadcrumb);
        localStorage.setItem('prefixedBreadcrumbs', JSON.stringify(this.prefixedBreadcrumbs));
        var allBreadcrumbs = this.prefixedBreadcrumbs.concat(this.breadcrumbs);
        this.breadcrumbsSource.next(allBreadcrumbs);
    };
    //Return the breadcrumbs
    BreadcrumbsService.prototype.get = function () {
        return this.breadcrumbsChanged$;
    };
    // storeIfUnique checks if there are any duplicate prefixed breadcrumbs
    BreadcrumbsService.prototype.storeIfUnique = function (newBreadcrumb) {
        var isUnique = true;
        for (var _i = 0, _a = this.prefixedBreadcrumbs; _i < _a.length; _i++) {
            var crumb = _a[_i];
            if (newBreadcrumb.url == crumb.url) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            this.prefixedBreadcrumbs.push(newBreadcrumb);
        }
    };
    BreadcrumbsService = __decorate([
        core_1.Injectable()
    ], BreadcrumbsService);
    return BreadcrumbsService;
}());
exports.BreadcrumbsService = BreadcrumbsService;
