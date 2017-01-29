import {Component} from '@angular/core';
import {YoutubeSearchService} from "./service/youtube-search.service";
declare var _;
@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.css']
})
export class YoutubeSearchComponent {

  searchText: string = '';
  searching: boolean = false;
  private videosResult;

  constructor(private _youtubeSearchService: YoutubeSearchService) {
  }

  search(scroll?: boolean) {
    this.searching = true;
    if (!scroll)
      this.videosResult = null;
    this._youtubeSearchService.search(this.searchText, scroll ? this.videosResult.nextPageToken : '')
      .subscribe(videos => {
          if (this.videosResult) {
            this.videosResult.items = _.union(this.videosResult.items, videos.items);
            this.videosResult.nextPageToken = videos.nextPageToken;
          }
          else
            this.videosResult = videos;
        },
        error => console.error('Error: ' + error),
        () => {
          console.log('Completed!');
          this.searching = false;
        });
  }

  onScroll() {
    this.search(true);
  }

  onScrollUp() {
    console.log('Scrolled up!')
  }

}
