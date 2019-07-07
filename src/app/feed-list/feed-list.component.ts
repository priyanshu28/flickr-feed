import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FlickrFeedService } from './../service/flickr-feed.service';
import { map, catchError, tap, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent implements OnInit {

  private imgList: Observable<SearchItem[]>;

  // public imgList = [];
  // public errorMsg;
  searchTerm: string;
  private searchField: FormControl;
  constructor(private _flickrFeedService: FlickrFeedService) { }

  ngOnInit() {
    this._flickrFeedService.getFlickrFeed()
      .subscribe(data => {
        this.imgList = data['items'];
        console.log(this.imgList);
      });

      this.searchField = new FormControl();
      this.imgList = this.searchField.valueChanges.pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(term => this._flickrFeedService.searchTag(term))
      );
  }

  // onSubmit(value: string) {
  //   // code
  //   this._flickrFeedService.searchTag(value);
  // }


}
