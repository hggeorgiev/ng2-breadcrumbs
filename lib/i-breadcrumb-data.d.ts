import { Params } from "@angular/router";
export interface IBreadcrumbData {
    label: string;
    className: string;
    prefix?: string;
    url?: string;
    params?: Params;
}
