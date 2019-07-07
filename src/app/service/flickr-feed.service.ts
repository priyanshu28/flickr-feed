import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IFeed } from '../model/feed';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlickrFeedService {

  private flickrFeedUrl: string = 'https://api.flickr.com/services/feeds/photos_public.gne?&format=json&jsoncallback=JSONP_CALLBACK';
  // private flickrFeedUrl: string = 'https://api.flickr.com/services/feeds/photos_public.gne?&jsoncallback=?';

  constructor(private http: HttpClient) { }


  getFlickrFeed() {
    // console.log(this.flickrFeedUrl);
    // return this.http.get(this.flickrFeedUrl);
    return this.http.jsonp(this.flickrFeedUrl, 'JSONP_CALLBACK').pipe(
      tap(
        data => data['items']
      )
    );
  }
  // getFlickrFeed():Observable<any> {   
  //   return this.http.jsonp(this.flickrFeedUrl, 'callback').pipe(
  //       map((res) => {
  //         console.log(res);
  //         return res;
  //       })
  //     );
  // }

  // getFlickrFeed():Observable<any> {   
  //   return this.http.jsonp(this.flickrFeedUrl+'&callback=JSONP_CALLBACK', 'callback')
  //     .pipe(
  //       map((res: string) => {
  //         console.log(res);
  //         res;
  //       })
  //     );
  // }
}
