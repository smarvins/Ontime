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
  

}
