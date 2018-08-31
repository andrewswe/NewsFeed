import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { NewsItem } from './news-item.interface';

export const API = '/api/posts';

@Injectable()
export class NewsService {
  constructor(private http: HttpClient) {}

  getNews(skip: number): Observable<NewsItem[]> {
    if(skip == undefined){
      skip = 0;
    }
    let options = {
      params: new HttpParams().set('skip', skip.toString())
    }

    return this.http.get<NewsItem[]>(API, options);
  }

  searchNews(value: string): Observable<NewsItem[]> {
    let options =
    {
      params: new HttpParams().set('search', value)
    }
    return this.http.get<NewsItem[]>(API, options);
  }
}
