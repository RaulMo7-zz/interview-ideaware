var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", '@angular/core', '@angular/common', './youtube-search.component', "angular2-infinite-scroll", "./service/youtube-search.service", "../shared/shared.module", "@angular/http", "@angular/forms", "@angular/platform-browser"], function (require, exports, core_1, common_1, youtube_search_component_1, angular2_infinite_scroll_1, youtube_search_service_1, shared_module_1, http_1, forms_1, platform_browser_1) {
    "use strict";
    let YoutubeSearchModule = class YoutubeSearchModule {
    };
    YoutubeSearchModule = __decorate([
        core_1.NgModule({
            declarations: [youtube_search_component_1.YoutubeSearchComponent],
            imports: [
                common_1.CommonModule,
                angular2_infinite_scroll_1.InfiniteScrollModule,
                shared_module_1.SharedModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
            ],
            providers: [youtube_search_service_1.YoutubeSearchService]
        })
    ], YoutubeSearchModule);
    exports.YoutubeSearchModule = YoutubeSearchModule;
});
//# sourceMappingURL=youtube-search.module.js.map