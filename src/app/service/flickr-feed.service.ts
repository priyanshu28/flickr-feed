import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IFeed } from '../model/feed';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

class SearchItem {
  constructor(
    public media: string,
    public tags: string
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class FlickrFeedService {

  private flickrFeedUrl: string = 'https://api.flickr.com/services/feeds/photos_public.gne?&format=json&jsoncallback=JSONP_CALLBACK';
  // private flickrFeedUrl: string = 'https://api.flickr.com/services/feeds/photos_public.gne?&jsoncallback=?';

  constructor(private http: HttpClient) { }


  getFlickrFeed() {
    return this.http.jsonp(this.flickrFeedUrl, 'callback').pipe(
      tap(
        data => data['items']
      )
    );
  }

  searchTag(value: string) {
    console.log(this.flickrFeedUrl + '&tags=' + value);
    return this.http.jsonp(this.flickrFeedUrl + '&tags=' + value, 'callback').pipe(
      map(data => {
        return data.imgList.map(item => {
          return new SearchItem(
            item.media.m,
            item.artistName
          );
        });
      })
      // tap(
      //   data => data['items']
      // )
    );
  }
}
