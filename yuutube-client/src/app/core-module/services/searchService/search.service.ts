import { Injectable } from '@angular/core';
import { searchRes } from '../../../../assets/response/response';
import { SearchResponse } from 'src/app/shared-module/models/search-response.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public response: SearchResponse;

  constructor() { }

  public getVideos(reques: string): boolean {
    this.response = searchRes;
    return !!this.response;
  }
}
