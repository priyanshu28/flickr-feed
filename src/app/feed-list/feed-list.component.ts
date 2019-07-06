import { FlickrFeedService } from './../service/flickr-feed.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent implements OnInit {

  public imgList = [];
  public errorMsg;

  constructor(private _flickrFeedService: FlickrFeedService) { }

  ngOnInit() {
    this._flickrFeedService.getFlickrFeed()
      .subscribe(data => this.imgList = data,
                 error => this.errorMsg = error);

    console.log(this.imgList);
  }



}
