import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {of} from "rxjs/observable/of";
import {ARTICLES} from '../articles'

@Injectable()
export class ArticleResolver implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let id = +route.paramMap.get('id');

    return of(ARTICLES.find((a)=> a.Id === id))
  }
}
