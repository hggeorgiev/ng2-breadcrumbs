import {Component, Input, OnInit, ViewEncapsulation} from "@angular/core";
import {Router, ActivatedRoute, NavigationEnd, PRIMARY_OUTLET} from "@angular/router";
import {filter} from "rxjs/operators";

import {IBreadcrumb} from "./breadcrumbs.model";
import {BreadcrumbsService} from "./breadcrumbs.service";
import {IBreadcrumbData} from "./i-breadcrumb-data";


@Component({
    selector: "breadcrumb",
    template: `
        <div [ngClass]="{ 'container-fluid': allowBootstrap, 'fluid-bread': true}">
            <div class="container">
                <ol [ngClass]="{ 'breadcrumb': allowBootstrap}" class="{{addClass ? '' + addClass : ''}}">
                    <li *ngFor="let breadcrumb of breadcrumbs; let last = last"
                        class="{{breadcrumb.className ? '' + breadcrumb.className : ''}}"
                        [ngClass]="{ 'breadcrumb-item': allowBootstrap, 'list': true, 'active': last }">
                        <a *ngIf="!last" [routerLink]="hasParams(breadcrumb)">
                            {{breadcrumb.label}}
                        </a>
                        <span *ngIf="last">{{ breadcrumb.label }}</span>
                    </li>
                </ol>
            </div>
        </div>`,
    styles: [`
        .fluid-bread {
            background-color: white;
        }

        .breadcrumb {
            background-color: white;
            padding: 4px;
            margin-bottom: 0;
        }`],
    encapsulation: ViewEncapsulation.None
})

export class BreadcrumbComponent implements OnInit {

    // The breadcrumbs of the current route
    private currentBreadcrumbs: IBreadcrumb[];
    // All the breadcrumbs
    public breadcrumbs: IBreadcrumb[];

    @Input()
    public allowBootstrap: boolean;

    @Input()
    public addClass: string;


    public constructor(private breadcrumbService: BreadcrumbsService, private activatedRoute: ActivatedRoute, private router: Router) {
        breadcrumbService.get().subscribe((breadcrumbs: IBreadcrumb[]) => {
            this.breadcrumbs = breadcrumbs as IBreadcrumb[];
        });
    }

    public hasParams(breadcrumb: IBreadcrumb) {
        return Object.keys(breadcrumb.params).length ? [breadcrumb.url, breadcrumb.params] : [breadcrumb.url];
    }


    public ngOnInit() {
        const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";
        const ROUTE_PARAM_BREADCRUMB: string = "breadcrumb";
        const PREFIX_BREADCRUMB: string = "prefixBreadcrumb";

        // subscribe to the NavigationEnd event
        this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
            // reset currentBreadcrumbs
            this.currentBreadcrumbs = [];


            // get the root of the current route
            let currentRoute: ActivatedRoute = this.activatedRoute.root;


            // set the url to an empty string
            let url: string = "";

            // iterate from activated route to children
            while (currentRoute.children.length > 0) {
                let childrenRoutes: ActivatedRoute[] = currentRoute.children;
                let breadCrumbLabel: string = "";

                // iterate over each children
                childrenRoutes.forEach(route => {
                    // Set currentRoute to this route
                    currentRoute = route;
                    // Verify this is the primary route
                    if (route.outlet !== PRIMARY_OUTLET) {
                        return;
                    }

                    const hasData = (route.routeConfig && route.routeConfig.data);
                    const breadcrumbData: IBreadcrumbData = route.snapshot.data[ROUTE_DATA_BREADCRUMB] || {};
                    const hasDynamicBreadcrumb: boolean = route.snapshot.params.hasOwnProperty(ROUTE_PARAM_BREADCRUMB);

                    if (hasData || hasDynamicBreadcrumb) {


                        /*
                         Verify the custom data property "breadcrumb"
                         is specified on the route or in its parameters.

                         Route parameters take precedence over route data
                         attributes.
                         */
                        if (hasDynamicBreadcrumb) {
                            breadCrumbLabel = route.snapshot.params[ROUTE_PARAM_BREADCRUMB].replace(/_/g, " ");
                        } else if (breadcrumbData.dynamicBreadcrumb) {
                            breadCrumbLabel = route.snapshot.params[breadcrumbData.dynamicBreadcrumb];
                        } else if (breadcrumbData.breadcrumb) {
                            breadCrumbLabel = breadcrumbData.breadcrumb;
                        }

                        // Get the route's URL segment
                        let routeURL: string = route.snapshot.url.map(segment => segment.path).join("/");
                        url += `/${routeURL}`;

                        // Add breadcrumb
                        let breadcrumb: IBreadcrumb = {
                            label: breadCrumbLabel,
                            params: {},
                            url: url,
                            className: breadcrumbData.className
                        };

                        // Add the breadcrumb as 'prefixed'. It will appear before all breadcrumbs
                        if (route.snapshot.data.hasOwnProperty(PREFIX_BREADCRUMB)) {
                            this.breadcrumbService.storePrefixed(breadcrumb);
                        }
                        else {
                            this.currentBreadcrumbs.push(breadcrumb);
                        }

                    }

                });

                this.breadcrumbService.store(this.currentBreadcrumbs);
            }
        });
    }
}