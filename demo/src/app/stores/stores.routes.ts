import {Routes} from "@angular/router";
import {StoresComponent} from "./stores/stores.component";
export const storeRoutes: Routes = [
    {
        path: '',
        component: StoresComponent
    },
    {
        path: 'books',
        data: {
            breadcrumb: 'Books'
        },
        loadChildren: 'app/books/books.module#BooksModule'
    }

];