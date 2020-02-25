import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/searchService/search.service';
import { SortServiceService } from 'src/app/core-module/services/sortService/sort-service.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  constructor(private searchService: SearchService, private sortService: SortServiceService, private activatedRoute: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      let request: string = params.search_query;
      if (request) {
        this.searchService.getVideos(request);
      }
    });
  }

}
