import { FlickrFeedService } from './service/flickr-feed.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedListComponent } from './feed-list/feed-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FlickrFeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
