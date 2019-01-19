# ng2-breadcrumbs
[![npm version](https://badge.fury.io/js/ng2-breadcrumbs.svg)](https://badge.fury.io/js/ng2-breadcrumbs)

ng2-breadrumbs is a module for [Angular 7](https://angular.io/) that generates a breadcrumb for any page of your application. It is based on the built-in [Angular 7 router](https://angular.io/docs/ts/latest/guide/router.html).

## [Demo](https://centroida.github.io/ng7-breadcrumbs/)

# Usage

## Getting started

1.Install `ng2-breadcrumbs` via npm:

```bash
npm install --save ng2-breadcrumbs
```

2.Import the `BreadcrumbsModule` within your app:

```js
import {BreadcrumbsModule} from "ng2-breadcrumbs";

@NgModule({
  imports: [ 
    BreadcrumbsModule,
  ],
})
```

3.Add a name to your route by adding a `breadcrumb` property in the route's `data`:

```js
export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule',
        data: {
            breadcrumb: 'Home'
        }
    },
    {
        path: 'stores',
        loadChildren: 'app/stores/stores.module#StoresModule',
        data: {
            breadcrumb: 'Stores'
        }
    }
];
```

4.Put the `BreadcrumbsComponent`'s selector within your template:

```html
<breadcrumb [allowBootstrap]="true"></breadcrumb>
<router-outlet></router-outlet>
```

5. Then your `StoresModule`'s routes will look like this:

```js
const STORE_ROUTES: Routes = [
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
```

## Adding dynamic routes

In case you want a dynamic breadcrumb name, you can pass it as a `:breadcrumb` route parameter when navigating:
**Route:**
```js
//Add an extra route parameter that will contain the breadcrumb name
const BOOK_ROUTES: Routes = [
    {
        path: '',
        component: BooksComponent
    },
    {
        path: 'book/:id/:breadcrumb',
        component: BookComponent
    }
];
```
**Router code:**
```
    public goToBook(book: Book) {
        this.router.navigate(['book' , book.Id, book.Name], { relativeTo: this.route });
    }
```


## Adding routes manually

In case the router configuration does not satisfy the way you want to design your breadcrumb structure, you can do it manually through `BreadcrumbsService`. You can add your custom breadcrumbs through your route's routable component, for example:


```
export class MyRoutableComponent {
  constructor( private breadcrumbsService:BreadcrumbsService) {
  }

  ngOnInit() {
    this.breadcrumbs.store([{label: 'Home' , url: '/', params: []},{label: 'Careers' , url: '/careers', params: []}, {label:  'MyCustomRouteLabel' , url: '', params: []} ])
  }
}

```

### Prefixing routes
 Suppose that you already have your breadcrumbs generated, but due to the nesting of the routers, you want to add a breadcrumb from the parent router:

```
this.breadcrumbs.storePrefixed({label: 'Home' , url: '/', params: []})
```

### Breadcrumb format
The `BreadcrumbsService`'s `store' and `storePrefixed` methods breadcrumb objects. A breadcrumb object should contain:
- `label` -  The text displayed on the breadcrumb
- `url` - The link that it leads to
- `params` - A collection of route [parameters](https://angular.io/api/router/Params)


# TODO
 1. Add more use cases (using routerLinks, for example).

 
