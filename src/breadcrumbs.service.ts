import {Injectable} from '@angular/core';
import {IBreadcrumb} from "./breadcrumbs.model";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {IBreadcrumbData} from "./i-breadcrumb-data";
import {el} from "@angular/platform-browser/testing/src/browser_util";
import {BreadcrumbsTypes} from "./breadcrumbs-types";
@Injectable()
export class BreadcrumbsService {

    private breadcrumbs: IBreadcrumb[];
    private prefixedBreadcrumbs: IBreadcrumb[] = [];
    public breadcrumbsSource: Subject<IBreadcrumb[]>;
    public breadcrumbsChanged$: Observable<IBreadcrumb[]>;

    constructor() {
        this.breadcrumbs = [];
        this.breadcrumbsSource = new Subject<IBreadcrumb[]>();
        this.breadcrumbsChanged$ = this.breadcrumbsSource.asObservable();

        if (localStorage.getItem('prefixedBreadcrumbs') != null) {
            this.prefixedBreadcrumbs = (JSON.parse(localStorage.getItem('prefixedBreadcrumbs')))
        }
    }

    /**
     * Store the breadcrumbs of the current route
     * @param breadcrumbs
     */
    public store(breadcrumbs: IBreadcrumb[]) {
        this.breadcrumbs = breadcrumbs;

        let allBreadcrumbs = this.prefixedBreadcrumbs.concat(this.breadcrumbs);
        this.breadcrumbsSource.next(allBreadcrumbs);

    }

    /**
     * Add a prefixed breadcrumb
     * @param breadcrumb
     */
    public storePrefixed(breadcrumb: IBreadcrumb) {
        this.storeIfUnique(breadcrumb);
        localStorage.setItem('prefixedBreadcrumbs', JSON.stringify(this.prefixedBreadcrumbs));
        let allBreadcrumbs = this.prefixedBreadcrumbs.concat(this.breadcrumbs);
        this.breadcrumbsSource.next(allBreadcrumbs);
    }


    /**
     * Return the breadcrumbs
     * @returns {Observable<IBreadcrumb[]>}
     */
    public get() {
        return this.breadcrumbsChanged$
    }


    /**
     * storeIfUnique checks if there are any duplicate prefixed breadcrumbs
     * @param newBreadcrumb
     */
    private storeIfUnique(newBreadcrumb: IBreadcrumb) {
        let isUnique = true;
        for (let crumb of this.prefixedBreadcrumbs) {
            if (newBreadcrumb.url == crumb.url) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            this.prefixedBreadcrumbs.push(newBreadcrumb);
        }

    }

    /**
     *
     Verify the custom data property "breadcrumb"
     is specified on the route or in its parameters.

     Route parameters take precedence over route data
     attributes.
     * @param breadcrumb
     * @returns {string}
     */
    getBreadCrumbData(data: Object, breadcrumbQuery?: string): IBreadcrumbData {
        const breadcrumbData: (data, query) => IBreadcrumbData | IBreadcrumbData = data[BreadcrumbsTypes.ROUTE_DATA_BREADCRUMB];
        return typeof breadcrumbData === 'function' ?
            breadcrumbData(data, breadcrumbQuery) : <IBreadcrumbData>{label: breadcrumbQuery || breadcrumbData || ''};
    }

    /**
     * Get the route's URL segment
     * @param route
     * @returns {string}
     */
    getUrlForRoute(route) {
        return `/${route.snapshot.url.map(segment => segment.path).join("/")}`;
    };
}