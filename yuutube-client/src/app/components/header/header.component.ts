import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { SearchResponse } from 'src/app/models/search-response.model';
import { searchRes } from '../../../assets/response/response';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public sendSortType: EventEmitter<string> = new EventEmitter();
  @Output() public sendResponse: EventEmitter<SearchResponse> = new EventEmitter();

  public searchResponse: SearchResponse = searchRes;
  public isSettingsOpened: boolean = false;

  constructor() { }

  public ngOnInit(): void {
  }

}
