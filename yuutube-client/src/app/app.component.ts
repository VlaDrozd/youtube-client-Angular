import { Component } from '@angular/core';
<<<<<<< HEAD
import { SearchResponse } from './shared-module/models/search-response.model';
=======
import { SearchItem } from './models/search-item.model';
>>>>>>> 4514038af9fe815981835393cf8c6e573c102a90

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
<<<<<<< HEAD

=======
  public sortType: string = 'date';
  public searchResponse: SearchItem[] = [];

  public getSortType(type: string): void {
    this.sortType = type;
    console.log(type);
  }

  public getResponse(response: SearchItem[]): void {
    this.searchResponse = response;
  }
>>>>>>> 4514038af9fe815981835393cf8c6e573c102a90
}
