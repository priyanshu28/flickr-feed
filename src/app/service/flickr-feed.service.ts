import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


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
      ),
      catchError(err => {
        console.error(err.message);
        return throwError("Error thrown from catchError");
      })
    );
  }

  searchTag(tag_name) {
    return this.http.jsonp(this.flickrFeedUrl + '&tags=' + tag_name, 'JSONP_CALLBACK').pipe(
      tap(
        data => data
      ),
      catchError(err => {
        console.error(err.message);
        return throwError("Error thrown from catchError");
      })
    );
  }
}
