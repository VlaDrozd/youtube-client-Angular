import { Component } from '@angular/core';
import { SearchResponse } from './shared-module/models/search-response.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public sortType: string = 'date';
  public searchResponse: SearchResponse;

  public getSortType(type: string): void {
    this.sortType = type;
    console.log(type);
  }

  public getResponse(response: SearchResponse): void {
    this.searchResponse = response;
  }
}
