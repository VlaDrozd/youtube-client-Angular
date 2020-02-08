import { Component, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.model';
import { Snippet } from 'src/app/models/snippet.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit, SearchItem {

  public kind: string;
  public etag: string;
  public id: string;
  public snippet: Snippet;
  public statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };

  constructor() { }

  public ngOnInit(): void {
  }

}
