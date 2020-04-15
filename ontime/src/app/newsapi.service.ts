import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  api_key = '78607a355fd24d618fdf7e30ace4a375';

  constructor( private http:HttpClient ) { }
  initSources(){
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key)
  }
  initArticles(){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
  }
  getArticlesById(source: String){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
  }
}
