import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sort-options',
  templateUrl: './sort-options.component.html',
  styleUrls: ['./sort-options.component.scss']
})
export class SortOptionsComponent implements OnInit {
  @Output() public setSortType: EventEmitter<string> = new EventEmitter();

  public keyword: string = '';

  // tslint:disable-next-line: no-any
  public debounce: any;

  constructor() { }

  public ngOnInit(): void {
  }

  public onInit(): void {
    if (this.debounce) {
      clearTimeout(this.debounce);
    }
    this.debounce = setTimeout(() => this.setSortType.emit(this.keyword), 500);
  }

}
