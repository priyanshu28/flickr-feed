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

  private imgList: null;

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
    this.searchField.valueChanges.subscribe(
      (selectedValue) => {
        this._flickrFeedService.searchTag(selectedValue).subscribe(data => {
          this.imgList = data['items'];
          console.log(this.imgList);
        });
      }
    );
  }

  onSubmit(value: string) {
    this._flickrFeedService.searchTag(value).subscribe(data => {
      this.imgList = data['items'];
      console.log(this.imgList);
    });
  }


}
