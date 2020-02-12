import { Input, Component, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input() public item: SearchItem;

  constructor() { }

  public ngOnInit(): void {
  }

  public getBorderColor(): string {
    let days: number = (new Date().getTime() -
      new Date(this.item.snippet.publishedAt).getTime()) / (1000 * 60 * 60 * 24);
    if (days < 7) {
      return '#2F80ED';
    }
    if (days < 31) {
      return '#27AE60';
    }
    if (days < 183) {
      return '#F2C94C';
    }
    return '#EB5757';
  }

}
