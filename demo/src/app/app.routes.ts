/**
 * Copyright (c) 2017 Centroida. All rights reserved.
 */

import {Routes} from '@angular/router';
import {IBreadcrumbData} from "ng2-breadcrumbs";

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
  },
  {
    path: 'articles',
    loadChildren: 'app/articles/articles.module#ArticlesModule',
    data: {
      breadcrumb: function (): IBreadcrumbData {
        return {
          label: 'Home-article',
          className: 'article-class',
          suffix: 'article_suffix_',
          url: '/home'
        }
      }
    }
  }
];

