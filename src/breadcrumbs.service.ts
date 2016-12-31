import { Injectable } from '@angular/core';
import {IBreadcrumb} from "./breadcrumbs.model";
import {Observable, Observer, Subject} from "rxjs";

@Injectable()
export class BreadcrumbsService {

    private breadcrumbs:IBreadcrumb[];
    private prefixedBreadcrumbs:IBreadcrumb[] = [];
    public breadcrumbsSource:Subject<IBreadcrumb[]>;
    public breadcrumbsChanged$:Observable<IBreadcrumb[]>;

    constructor() {
        this.breadcrumbs = [];
        this.breadcrumbsSource = new Subject<IBreadcrumb[]>();
        this.breadcrumbsChanged$ = this.breadcrumbsSource.asObservable();

        if(localStorage.getItem('prefixedBreadcrumbs') != null) {
            this.prefixedBreadcrumbs = (JSON.parse(localStorage.getItem('prefixedBreadcrumbs')))
        }
    }

    //Store the breadcrumbs of the current route
    public store(breadcrumbs:IBreadcrumb[]) {
        this.breadcrumbs = breadcrumbs;

        let allBreadcrumbs = this.prefixedBreadcrumbs.concat(this.breadcrumbs);
        this.breadcrumbsSource.next(allBreadcrumbs);

    }


    // Add a prefixed breadcrumb
    public storePrefixed(breadcrumb:IBreadcrumb) {
        this.storeIfUnique(breadcrumb);
        localStorage.setItem('prefixedBreadcrumbs', JSON.stringify(this.prefixedBreadcrumbs));
        let allBreadcrumbs = this.prefixedBreadcrumbs.concat(this.breadcrumbs);
        this.breadcrumbsSource.next(allBreadcrumbs);

    }


    //Return the breadcrumbs
    public get() {
        return this.breadcrumbsChanged$
    }



    // storeIfUnique checks if there are any duplicate prefixed breadcrumbs
    private storeIfUnique(newBreadcrumb:IBreadcrumb) {
        let isUnique = true;
        for(let crumb of this.prefixedBreadcrumbs) {
            if (newBreadcrumb.url == crumb.url) {
                isUnique = false;
                break;
            }
        }
        if(isUnique) {
            this.prefixedBreadcrumbs.push(newBreadcrumb);
        }

    }

}