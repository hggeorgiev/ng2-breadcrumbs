import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET} from "@angular/router";
import "rxjs/add/operator/filter";
import {IBreadcrumb} from "./breadcrumbs.model";
import {BreadcrumbsService} from "./breadcrumbs.service";



@Component({
    selector: "breadcrumb",
    // template: require('./breadcrumbs.template.pug'),
    // styles: [require('./breadcrumbs.styles.scss')]
})

export class BreadcrumbComponent implements OnInit {

    //The breadcrumbs of the current route
    public currentBreadcrumbs: IBreadcrumb[];
    //All the breadcrumbs
    public breadcrumbs:IBreadcrumb[];


    constructor(private breadcrumbService:BreadcrumbsService, private activatedRoute: ActivatedRoute, private router: Router) {
        breadcrumbService.get().subscribe((breadcrumbs:IBreadcrumb[]) => {
            this.breadcrumbs = breadcrumbs as IBreadcrumb[];
        });
    }



    ngOnInit() {
        const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";
        const ROUTE_PARAM_BREADCRUMB: string = "breadcrumb";
        const PREFIX_BREADCRUMB:string = "prefixBreadcrumb";

        //subscribe to the NavigationEnd event
        this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
            //reset currentBreadcrumbs
            this.currentBreadcrumbs = [];


            //get the root of the current route
            let currentRoute: ActivatedRoute = this.activatedRoute.root;


            //set the url to an empty string
            let url: string = "";

            //iterate from activated route to children
            while (currentRoute.children.length > 0) {
                let childrenRoutes: ActivatedRoute[] = currentRoute.children;
                var breadCrumbLabel:string = '';

                //iterate over each children
                childrenRoutes.forEach(route => {
                    // Set currentRoute to this route
                    currentRoute = route;
                    // Verify this is the primary route
                    if (route.outlet !== PRIMARY_OUTLET) {
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
                    } else if(route.snapshot.params.hasOwnProperty(ROUTE_PARAM_BREADCRUMB)) {
                        breadCrumbLabel = route.snapshot.params['breadcrumb'].replace(/_/g, " ")
                    } else {
                        //fallback to empty string
                        breadCrumbLabel = 'empty_breadcrumb_name';
                    }




                    // Get the route's URL segment
                    let routeURL: string = route.snapshot.url.map(segment => segment.path).join("/");
                    url += `/${routeURL}`;

                    // Cannot have parameters on a root route
                    if(routeURL.length == 0) {
                        route.snapshot.params = {};
                    }


                    // Add breadcrumb
                    let breadcrumb: IBreadcrumb = {
                        label: breadCrumbLabel,
                        params: route.snapshot.params,
                        url: url
                    };

                    // Add the breadcrumb as 'prefixed'. It will appear before all breadcrumbs
                    if(route.snapshot.data.hasOwnProperty(PREFIX_BREADCRUMB)) {
                        this.breadcrumbService.storePrefixed(breadcrumb);
                    }
                    else {
                        this.currentBreadcrumbs.push(breadcrumb);
                    }

                });

                this.breadcrumbService.store(this.currentBreadcrumbs);
            }
        });
    }
}