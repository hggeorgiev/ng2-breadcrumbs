import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BookComponent} from "./book/book.component";
import {BooksComponent} from "./books.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const BOOK_ROUTES: Routes = [
  {
    path: '',
    component: BooksComponent
  },
  {
    path: ':id/:breadcrumb',
    component: BookComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BOOK_ROUTES),
    NgbModule
  ],
  declarations: [BooksComponent, BookComponent]
})


export class BooksModule {
}
