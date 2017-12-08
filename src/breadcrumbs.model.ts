import {Params} from "@angular/router";
export interface IBreadcrumb {
    label: string;
    params: Params;
    url: string;
    className: string;
}