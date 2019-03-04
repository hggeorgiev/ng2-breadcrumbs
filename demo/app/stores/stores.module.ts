import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoresComponent } from './stores/stores.component';

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
    loadChildren: '../books/books.module#BooksModule'
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(STORE_ROUTES)],
  declarations: [StoresComponent]
})
export class StoresModule {}
