import { OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import "rxjs/add/operator/filter";
import { IBreadcrumb } from "./breadcrumbs.model";
import { BreadcrumbsService } from "./breadcrumbs.service";
export declare class BreadcrumbComponent implements OnInit {
    private breadcrumbService;
    private activatedRoute;
    private router;
    private currentBreadcrumbs;
    breadcrumbs: IBreadcrumb[];
    allowBootstrap: boolean;
    addClass: string;
    constructor(breadcrumbService: BreadcrumbsService, activatedRoute: ActivatedRoute, router: Router);
    hasParams(breadcrumb: IBreadcrumb): (string | Params)[];
    ngOnInit(): void;
}
