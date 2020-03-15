import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortServiceService {

  public sortType: string = 'date';

  constructor() { }

  public setSort(type: string): void {
    this.sortType = type;
  }

}
