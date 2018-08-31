import { Component, OnInit } from '@angular/core';

import { NewsService, NewsItem } from '../core';

@Component({
  selector: 'app-home',
  template: `
    <div class="input-container">
      <input type="text" placeholder="Search News" #search (keyup)="onKeyUp(search.value)">
    </div>

    <app-feed *ngIf="!loading" [news]="news"></app-feed>

    <app-loader *ngIf="loading"></app-loader>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading = false;
  news: NewsItem[] = [];
  yDist = 0;
  windowHeight = 0;
  yMax = this.windowHeight - (this.windowHeight * 0.9);
  scrolls = 0;

  appendTimes() {
    const currentDate = +new Date();
    for(let i = 0; i < this.news.length; i++) {
      let item = this.news[i];
      let itemTime = +new Date(item.time);
      let seconds = (currentDate - itemTime) / 1000;
      let minute = Math.floor(seconds / 60);
      let hour = Math.floor(seconds / (3600));
      let day = Math.floor(seconds / (86400));
      let week = Math.floor(seconds / (604800));
      let month = Math.floor(seconds / (2419200));
      let year = Math.floor(seconds / (29030400));
      let num = 0;
      let increment = '';
      let plural = '';

      if(year){
        num = year;
        increment = ' year';
      }else if(month){
        num = month;
        increment = ' month';
      }else if(week){
        num = week;
        increment = ' week';
      }else if(day){
        num = day;
        increment = ' day';
      }else if(hour){
        num = hour;
        increment = ' hour';
      }else{
        num = minute;
        increment = ' minute';
      }

      if(num > 1){
        plural = 's';
      }

      item.time_ago = num.toString() + increment + plural + ' ago';
    }
  }

  constructor(private hn: NewsService) {
    window.addEventListener('scroll', (e) => {
      if(window.scrollY >= this.yMax){
        this.yMax += window.scrollY;
        this.scrolls += 1;

        this.hn.getNews(this.scrolls * 5).subscribe(data => {
          this.news = this.news.concat(data);
          this.appendTimes();
          console.log(data);
          console.log(this.news);
        });
      }
    })
  }


  ngOnInit() {
    this.loading = true;
    const currentDate = +new Date();

    this.hn.getNews(0).subscribe(data => {
      this.loading = false;
      this.news = data;
      this.appendTimes();
    });
  }

  onKeyUp(value: string) {
    const currentDate = +new Date();
    this.hn.searchNews(value).subscribe(data => {
      this.news = data;
      this.appendTimes();
    })
  }
}
