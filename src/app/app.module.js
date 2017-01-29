var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", '@angular/platform-browser', '@angular/core', '@angular/forms', '@angular/http', './app.component', './youtube-search/youtube-search.component', "./youtube-search/service/youtube-search.service", "angular2-infinite-scroll"], function (require, exports, platform_browser_1, core_1, forms_1, http_1, app_component_1, youtube_search_component_1, youtube_search_service_1, angular2_infinite_scroll_1) {
    "use strict";
    /// <reference path="../../typings/globals/underscore/index.d.ts" />
    let AppModule = class AppModule {
    };
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                youtube_search_component_1.YoutubeSearchComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                angular2_infinite_scroll_1.InfiniteScrollModule,
            ],
            providers: [youtube_search_service_1.YoutubeSearchService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    exports.AppModule = AppModule;
});
//# sourceMappingURL=app.module.js.map