import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SortServiceService } from '../../services/sortService/sort-service.service';

@Component({
  selector: 'app-sort-options',
  templateUrl: './sort-options.component.html',
  styleUrls: ['./sort-options.component.scss']
})
export class SortOptionsComponent implements OnInit {
  public keyword: string = '';

  // tslint:disable-next-line: no-any
  public debounce: any;

  constructor(private sortService: SortServiceService) { }

  public ngOnInit(): void {
  }

  public onInit(): void {
    if (this.debounce) {
      clearTimeout(this.debounce);
    }
    this.debounce = setTimeout(() => this.sortService.setSort(this.keyword), 500);
  }

}
