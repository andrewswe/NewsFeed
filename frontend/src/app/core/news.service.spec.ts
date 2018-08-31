import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { NewsItem } from './news-item.interface';
import { NewsService, API } from './news.service';

describe('NewsService', () => {
  let service: NewsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NewsService]
    });

    service = TestBed.get(NewsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch a news list', () => {
    const sampleNews: Partial<NewsItem>[] = [
      { id: 0, time: 100000 },
      { id: 1, time: 100000 },
      { id: 2, time: 100000 },
      { id: 3, time: 100000 },
      { id: 4, time: 100000 }
    ];

    service.getNews(0).subscribe(news => {
      expect(news.length).toBe(5);

      expect(news as Partial<NewsItem>[]).toEqual(sampleNews);
    });

    const req = httpMock.expectOne(API + '?skip=0');

    expect(req.request.method).toBe('GET');

    req.flush(sampleNews);
  });

  it('should do a partial search on the title, user, and url fields', () => {
    const sampleBase: Partial<NewsItem>[] = [
      { title: 'livesafe', user: 'andrew', url: 'abc.com'},
      { title: 'andrew', user: 'bob', url: 'def.com' },
      { title: 'snapchat', user: 'todd', url: 'andrew.com' }
    ];

    service.searchNews('an').subscribe(news => {
      expect(news as Partial<NewsItem>[]).toEqual(sampleBase);
    });

    const req = httpMock.expectOne(API + '?search=an');

    expect(req.request.method).toBe('GET');
    expect(req.request.url).toBe(API);
    expect(req.request.params.toString()).toEqual('search=an');

    req.flush(sampleBase);
  });
});
