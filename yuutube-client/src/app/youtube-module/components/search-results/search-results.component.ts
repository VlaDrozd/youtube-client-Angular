import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../core-module/services/searchService/search.service';
import { SortServiceService } from 'src/app/core-module/services/sortService/sort-service.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  constructor(private searchService: SearchService, private sortService: SortServiceService) {
  }

  public ngOnInit(): void {

  }

}
