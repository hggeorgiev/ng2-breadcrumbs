import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ArticleComponent} from "./article/artical.component";
import {ArticlesComponent} from "./articles.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ArticleResolver} from "./article-resolver/arcticle-resolver.guard";

const ARTICLE_ROUTES: Routes = [
  {
    path: '',
    component: ArticlesComponent
  },
  {
    path: ':id',
    component: ArticleComponent,
    data: {
      breadcrumb: function (dataParams, queryParams) {
        return {
          label: dataParams.article.Name
        }
      }
    },
    resolve: {
      article: ArticleResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ARTICLE_ROUTES),
    NgbModule
  ],
  declarations: [ArticlesComponent, ArticleComponent],
  providers: [
    ArticleResolver
  ]
})


export class ArticlesModule {
}
