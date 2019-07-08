import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FlickrFeedService } from './../service/flickr-feed.service';


@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent implements OnInit {

  private imgList: null;
  searchTerm: string;

  constructor(private _flickrFeedService: FlickrFeedService) { }

  ngOnInit() {
    this._flickrFeedService.getFlickrFeed()
      .subscribe(data => {
        this.imgList = data['items'];
      });
  }

  onSubmit(value: string) {
    this._flickrFeedService.searchTag(value).subscribe(data => {
      this.imgList = data['items'];
    });
  }


}
