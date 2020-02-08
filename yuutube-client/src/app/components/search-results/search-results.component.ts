import { Component, OnInit } from '@angular/core';
import { SearchResponse } from 'src/app/models/search-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, SearchResponse {

  public kind: string;
  public etag: string;
  public pageInfo: { totalResults: number; resultsPerPage: number; };
  public items: import('../../models/search-item.model').SearchItem[];

  constructor() { }

  public ngOnInit(): void {
  }

}
