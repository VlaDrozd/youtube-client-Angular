import { Injectable } from '@angular/core';
import { searchRes } from '../../../../assets/response/response';
import { SearchItem } from 'src/app/shared-module/models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  public response: SearchItem[] = [];

  constructor() { }

  public getVideos(request: string): boolean {
    this.response = searchRes.items;
    return !!this.response;
  }

  public getByID(id: string): SearchItem {
    function finder(item: SearchItem): boolean {
      return item.id === id;
    }
    let itemm: SearchItem = searchRes.items.find(finder);
    return itemm;
  }
}
