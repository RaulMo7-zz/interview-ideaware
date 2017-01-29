var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", '@angular/core', 'rxjs/add/operator/map'], function (require, exports, core_1) {
    "use strict";
    const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
    const API_TOKEN = 'AIzaSyDkRL1spruYRKMVGxfPTjUgn0tT_LjlK6A';
    const maxResults = 10;
    let YoutubeSearchService = class YoutubeSearchService {
        constructor(_http) {
            this._http = _http;
        }
        search(queryText, nextPageToken) {
            let query = `${BASE_URL}?q=${queryText}&part=snippet&key=${API_TOKEN}&maxResults=${maxResults}&type=video`;
            if (nextPageToken)
                query = query + `&pageToken=${nextPageToken}`;
            return this._http.get(query)
                .map((res) => res.json());
        }
    };
    YoutubeSearchService = __decorate([
        core_1.Injectable()
    ], YoutubeSearchService);
    exports.YoutubeSearchService = YoutubeSearchService;
});
//# sourceMappingURL=youtube-search.service.js.map