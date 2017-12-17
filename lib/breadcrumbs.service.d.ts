import { IBreadcrumb } from "./breadcrumbs.model";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { IBreadcrumbData } from "./i-breadcrumb-data";
export declare class BreadcrumbsService {
    private breadcrumbs;
    private prefixedBreadcrumbs;
    breadcrumbsSource: Subject<IBreadcrumb[]>;
    breadcrumbsChanged$: Observable<IBreadcrumb[]>;
    constructor();
    /**
     * Store the breadcrumbs of the current route
     * @param breadcrumbs
     */
    store(breadcrumbs: IBreadcrumb[]): void;
    /**
     * Add a prefixed breadcrumb
     * @param breadcrumb
     */
    storePrefixed(breadcrumb: IBreadcrumb): void;
    /**
     * Return the breadcrumbs
     * @returns {Observable<IBreadcrumb[]>}
     */
    get(): Observable<IBreadcrumb[]>;
    /**
     * storeIfUnique checks if there are any duplicate prefixed breadcrumbs
     * @param newBreadcrumb
     */
    private storeIfUnique(newBreadcrumb);
    /**
     *
     Verify the custom data property "breadcrumb"
     is specified on the route or in its parameters.

     Route parameters take precedence over route data
     attributes.
     * @param breadcrumb
     * @returns {string}
     */
    getBreadCrumbData(data: Object, breadcrumbQuery?: string): IBreadcrumbData;
    /**
     * Get the route's URL segment
     * @param route
     * @returns {string}
     */
    getUrlForRoute(route: any): string;
}
