import { Component } from '@angular/core';
import { SearchItem } from './shared-module/models/search-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public sortType: string = 'date';
  public searchResponse: SearchItem[] = [];

  public getSortType(type: string): void {
    this.sortType = type;
    console.log(type);
  }

  public getResponse(response: SearchItem[]): void {
    this.searchResponse = response;
  }

}
