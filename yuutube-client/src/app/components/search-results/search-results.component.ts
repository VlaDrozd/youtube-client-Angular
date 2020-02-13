import { Component, OnInit, Input } from '@angular/core';
import { SearchResponse } from 'src/app/models/search-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  @Input() public response: SearchResponse;

  @Input() public sortType: string = 'date';

  constructor() { }

  public ngOnInit(): void {
  }

}
