"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var breadcrumbs_types_1 = require("./breadcrumbs-types");
var BreadcrumbsService = (function () {
    function BreadcrumbsService() {
        this.prefixedBreadcrumbs = [];
        this.breadcrumbs = [];
        this.breadcrumbsSource = new Subject_1.Subject();
        this.breadcrumbsChanged$ = this.breadcrumbsSource.asObservable();
        if (localStorage.getItem('prefixedBreadcrumbs') != null) {
            this.prefixedBreadcrumbs = (JSON.parse(localStorage.getItem('prefixedBreadcrumbs')));
        }
    }
    /**
     * Store the breadcrumbs of the current route
     * @param breadcrumbs
     */
    BreadcrumbsService.prototype.store = function (breadcrumbs) {
        this.breadcrumbs = breadcrumbs;
        var allBreadcrumbs = this.prefixedBreadcrumbs.concat(this.breadcrumbs);
        this.breadcrumbsSource.next(allBreadcrumbs);
    };
    /**
     * Add a prefixed breadcrumb
     * @param breadcrumb
     */
    BreadcrumbsService.prototype.storePrefixed = function (breadcrumb) {
        this.storeIfUnique(breadcrumb);
        localStorage.setItem('prefixedBreadcrumbs', JSON.stringify(this.prefixedBreadcrumbs));
        var allBreadcrumbs = this.prefixedBreadcrumbs.concat(this.breadcrumbs);
        this.breadcrumbsSource.next(allBreadcrumbs);
    };
    /**
     * Return the breadcrumbs
     * @returns {Observable<IBreadcrumb[]>}
     */
    BreadcrumbsService.prototype.get = function () {
        return this.breadcrumbsChanged$;
    };
    /**
     * storeIfUnique checks if there are any duplicate prefixed breadcrumbs
     * @param newBreadcrumb
     */
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
    /**
     *
     Verify the custom data property "breadcrumb"
     is specified on the route or in its parameters.

     Route parameters take precedence over route data
     attributes.
     * @param breadcrumb
     * @returns {string}
     */
    BreadcrumbsService.prototype.getBreadCrumbData = function (data, breadcrumbQuery) {
        var breadcrumbData = data[breadcrumbs_types_1.BreadcrumbsTypes.ROUTE_DATA_BREADCRUMB];
        return typeof breadcrumbData === 'function' ?
            breadcrumbData(data, breadcrumbQuery) : { label: breadcrumbQuery || breadcrumbData || '' };
    };
    /**
     * Get the route's URL segment
     * @param route
     * @returns {string}
     */
    BreadcrumbsService.prototype.getUrlForRoute = function (route) {
        return "/" + route.snapshot.url.map(function (segment) { return segment.path; }).join("/");
    };
    ;
    BreadcrumbsService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    BreadcrumbsService.ctorParameters = function () { return []; };
    return BreadcrumbsService;
}());
exports.BreadcrumbsService = BreadcrumbsService;
//# sourceMappingURL=breadcrumbs.service.js.map