import { IBreadcrumb } from "./breadcrumbs.model";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
export declare class BreadcrumbsService {
    private breadcrumbs;
    private prefixedBreadcrumbs;
    breadcrumbsSource: Subject<IBreadcrumb[]>;
    breadcrumbsChanged$: Observable<IBreadcrumb[]>;
    constructor();
    store(breadcrumbs: IBreadcrumb[]): void;
    storePrefixed(breadcrumb: IBreadcrumb): void;
    get(): Observable<IBreadcrumb[]>;
    private storeIfUnique(newBreadcrumb);
}
