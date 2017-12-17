import { OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
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
    hasParams(breadcrumb: IBreadcrumb): (string | {
        [key: string]: any;
    })[];
    ngOnInit(): void;
}
