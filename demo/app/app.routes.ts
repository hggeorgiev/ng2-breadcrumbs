/**
 * Copyright (c) 2017 Centroida. All rights reserved.
 */

import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    data: {
      breadcrumb: 'Home'
    }
  },
  {
    path: 'stores',
    loadChildren: './stores/stores.module#StoresModule',
    data: {
      breadcrumb: 'Stores'
    }
  }
];
