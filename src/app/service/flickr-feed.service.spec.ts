import { TestBed } from '@angular/core/testing';

import { FlickrFeedService } from './flickr-feed.service';

describe('FlickrFeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlickrFeedService = TestBed.get(FlickrFeedService);
    expect(service).toBeTruthy();
  });
});
