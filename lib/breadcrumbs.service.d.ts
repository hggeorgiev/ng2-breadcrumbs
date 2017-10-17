import { IBreadcrumb } from "./breadcrumbs.model";
import { Observable, Subject } from "rxjs";
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
