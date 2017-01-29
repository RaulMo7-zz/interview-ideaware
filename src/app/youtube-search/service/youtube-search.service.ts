import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_TOKEN = 'AIzaSyDkRL1spruYRKMVGxfPTjUgn0tT_LjlK6A';
const maxResults: number = 10;


@Injectable()
export class YoutubeSearchService {

  constructor(private _http: Http) {
  }

  search(queryText: string, nextPageToken?: string) {
    let query: string = `${BASE_URL}?q=${queryText}&part=snippet&key=${API_TOKEN}&maxResults=${maxResults}&type=video`;
    if (nextPageToken)
      query = query + `&pageToken=${nextPageToken}`;

    return this._http.get(query)
      .map((res: Response) => res.json());
  }
}

