import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

interface ArticleShort {
  Id: number;
  Name: string;
}
@Component({
    selector: 'app-books',
    templateUrl: 'articles.component.html',
    styleUrls: ['articles.component.css']
})
export class ArticlesComponent implements OnInit {

    public articles: ArticleShort[] = [
      {
        "Id": 908,
        "Name": "THE FELLOWSHIP OF THE RING"
      },
      {
        "Id": 910,
        "Name": "THE RETURN OF THE KING"
      },
      {
        "Id": 912,
        "Name": "Harry Potter and the Philosopher's Stone"

      },
      {
        "Id": 913,
        "Name": "Harry Potter and the Chamber of Secrets"
      }
    ];

    public constructor(private router: Router, private route: ActivatedRoute) {
    }

    public ngOnInit() {
        this.articles.push(

        );
    }

}


export interface Book {
    Author: string;
    Name: string;
    Id: number;
    PictureURL: string;
    Price: number;
    Rating: number;
}
