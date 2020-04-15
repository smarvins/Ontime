import { Component } from '@angular/core';
import { NewsApiService } from './newsapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ontime';
  mArticles:Array<any>;
  mSources:Array<any>;

  constructor(private newsapi:NewsApiService) {
    console.log('app component constructor called');
  }

  ngOnInit() {
    //Load articles
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    //Load news sources
    this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
  }

  searchArticles(source) {
    //This will let the user select a specific news source from the list
    console.log('selected source is :'+source);
    this.newsapi.getArticlesById(source).subscribe(data => this.mArticles = data['articles']);
  }

}
