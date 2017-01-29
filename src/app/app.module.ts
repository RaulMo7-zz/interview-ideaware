import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';
import {YoutubeSearchService} from "./youtube-search/service/youtube-search.service";
import {InfiniteScrollModule} from "angular2-infinite-scroll";
import {SharedModule} from "./shared/shared.module";
/// <reference path="../../typings/globals/underscore/index.d.ts" />

@NgModule({
  declarations: [
    AppComponent,
    YoutubeSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InfiniteScrollModule,
    SharedModule
  ],
  providers: [YoutubeSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
