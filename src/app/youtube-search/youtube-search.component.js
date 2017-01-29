var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", '@angular/core'], function (require, exports, core_1) {
    "use strict";
    let YoutubeSearchComponent = class YoutubeSearchComponent {
        constructor(_youtubeSearchService) {
            this._youtubeSearchService = _youtubeSearchService;
            this.searchText = '';
        }
        search(scroll) {
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
            }, error => console.error('Error: ' + error), () => console.log('Completed!'));
        }
        onScroll() {
            this.search(true);
        }
        onScrollUp() {
            console.log('Scrolled up!');
        }
    };
    YoutubeSearchComponent = __decorate([
        core_1.Component({
            selector: 'app-youtube-search',
            templateUrl: './youtube-search.component.html',
            styleUrls: ['./youtube-search.component.css']
        })
    ], YoutubeSearchComponent);
    exports.YoutubeSearchComponent = YoutubeSearchComponent;
});
//# sourceMappingURL=youtube-search.component.js.map