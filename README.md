**NOTE:** This package is still under development. Contributions are appreciated. 
# ng4-breadcrumbs
[![npm version](https://badge.fury.io/js/ng2-breadcrumbs.svg)](https://badge.fury.io/js/ng2-breadcrumbs)

ng2-breadrumbs is a module for [Angular 4](https://angular.io/) that generates a breadcrumb for any page of your application. It is based on the built-in [Angular 4 router](https://angular.io/docs/ts/latest/guide/router.html).


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

4.Put the `BreadcrumbsComponent`'s selector within your template:

```html
<breadcrumb></breadcrumb>
```

## Adding dynamic routes

In case you want a dynamic breadcrumb name, you can pass it as a `:breadcrumb` route parameter when navigating:
**Route:**
```js
   //Add an extra route parameter that will contain the breadcrumb name
		{
			path: ':id/:breadcrumb',
			component: ProfileBreadcrumbDetails,
		}
```
**Router code:**
```
    public name = 'John Doe';
    public id = 3;
    goToDetails() {
        //This will put 'John_Doe' as a route parameter
        this._router.navigate([`/profiles`, this.id, this.name.replace(/ /g,"_")]);
		}
```

# TODO
 1. Add more use cases (using routerLinks, for example).
 2. Document `BreadcrumbService`.
 3. Add demo.
 4. Add a license
 
