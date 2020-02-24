import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/searchService/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isSettingsOpened: boolean = false;
  public request: string;

  constructor(private searchService: SearchService) { }

  public ngOnInit(): void {
  }

  public sendRequest(): void {
    let isSuccess: Boolean = this.searchService.getVideos(this.request);
    while (!isSuccess) {
      isSuccess = this.searchService.getVideos(this.request);
    }
  }

}
