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

  constructor(private http: HttpClient) { }


  getFlickrFeed() {
    return this.http.jsonp(this.flickrFeedUrl, 'JSONP_CALLBACK').pipe(
      tap(
        data => data['items']
      )
    );
  }

  searchTag(tag_name) {
    // let flickrFeedUrl = `https://api.flickr.com/services/feeds/photos_public.gne?&tags=${tag_name}&format=json&jsoncallback=JSONP_CALLBACK`;
    return this.http.jsonp(this.flickrFeedUrl+'&tags='+ tag_name, 'JSONP_CALLBACK').pipe(
      tap(
        data => data
      )
    );
  }
}
