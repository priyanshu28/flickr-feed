import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IFeed } from '../model/feed';
import { Observable, throwError } from 'rxjs';
// import '../rxjs/add/operator/catch';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlickrFeedService {

  private flickrFeedUrl: string = 'https://api.flickr.com/services/feeds/photos_public.gne?&format=json';

  constructor(private http: HttpClient) { }

  getFlickrFeed(): Observable<IFeed[]> {
    return this.http.get<IFeed[]>(this.flickrFeedUrl);
                    // .catchError(this.errorHandler);
    // return [
    //   { id: '1', url: 'https://live.staticflickr.com/65535/48210334546_f693e75fc5_b.jpg' },
    //   { id: '1', url: 'https://live.staticflickr.com/65535/48211387651_f5e98c95f1_b.jpg' }
    // ]
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throwError(error.message || "Server Error");
  }
}
