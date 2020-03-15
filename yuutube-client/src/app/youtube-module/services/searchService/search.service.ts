import { Injectable } from '@angular/core';
import { SearchItem } from 'src/app/shared-module/models/search-item.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResponse } from '../../../shared-module/models/search-response.model';
import { retry } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  private searchParams: HttpParams = new HttpParams()
    .set('part', 'snippet')
    .set('maxResults', '25')
    .set('type', 'video')
    .set('key', 'AIzaSyCgqhQO5c4nAKdTwxoWamvLsDmEwP1sNV0');

  private videosParams: HttpParams = new HttpParams()
    .set('part', 'snippet,statistics')
    .set('key', 'AIzaSyCgqhQO5c4nAKdTwxoWamvLsDmEwP1sNV0');

  private readonly searchURL: string = 'https://www.googleapis.com/youtube/v3/search?';
  private readonly videosURL: string = 'https://www.googleapis.com/youtube/v3/videos?';

  public response: SearchItem[] = [];

  constructor(private http: HttpClient) { }

  public getVideos(request: string): boolean {

    const sParams: HttpParams = this.searchParams.set('q', request);

    // tslint:disable-next-line: no-any
    this.http.get<any>(this.searchURL, { params: sParams }).pipe(retry(4)).subscribe(
      (res1) => {
        const vParams: HttpParams = this.videosParams.set('id', res1.items.map(el => el.id.videoId).join(','));
        this.http.get<SearchResponse>(this.videosURL, { params: vParams }).subscribe(
          (res2: SearchResponse) => {
            this.response = res2.items;
          }
        );
      }
    );
    return !!this.response;
  }

  public getByID(id: string): Subject<SearchItem> {
    const onFind: Subject<SearchItem> = new Subject<SearchItem>();
    const vParams: HttpParams = this.videosParams.set('id', id);
    this.http.get<SearchResponse>(this.videosURL, { params: vParams }).subscribe(
      (res: SearchResponse) => {
        onFind.next(res.items[0]);
      }
    );
    return onFind;
  }
}
