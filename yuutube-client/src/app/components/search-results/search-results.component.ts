import { Component, OnInit, Input } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  @Input() public response: SearchItem[] = [];

  @Input() public sortType: string = 'date';

  constructor() { }

  public ngOnInit(): void {
  }

}
