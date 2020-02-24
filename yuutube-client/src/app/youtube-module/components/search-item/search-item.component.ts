import { Input, Component, OnInit } from '@angular/core';
import { SearchItem } from '../../../shared-module/models/search-item.model';

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

}
