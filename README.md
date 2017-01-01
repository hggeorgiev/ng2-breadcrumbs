# ng2-breadcrumbs
[![npm version](https://badge.fury.io/js/ng2-breadcrumbs.svg)](https://badge.fury.io/js/ng2-breadcrumbs)

ng2-breadrumbs is a module for [Angular 2](https://angular.io/) that generates a breadcrumb for any page of your application. It is based on the built-in [Angular 2 router](https://angular.io/docs/ts/latest/guide/router.html).


# Getting started

1.  Install `ng2-breadcrumbs` via npm:

```bash
npm install --save ng2-breadcrumbs
```

2.   Import the `BreadcrumbsModule` within your app:

```js
import {BreadcrumbsModule} from "ng2-breadcrumbs";

@NgModule({
  imports: [ 
    BreadcrumbsModule,
  ],
})
```

3.  Add a name to your route by adding a `breadcrumb` property in the route's `data`:

```js
export const routes: Routes = 
[
  {
    path: 'home',
    data: {
      breadcrumb: 'Home',
    },
    component: HomeComponent
  }
]
```

4.  Put the `BreadcrumbsComponent`'s selector within your template:

```html
<breadcrumb></breadcrumb>
```
