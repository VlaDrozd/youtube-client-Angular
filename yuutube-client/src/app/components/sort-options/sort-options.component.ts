import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sort-options',
  templateUrl: './sort-options.component.html',
  styleUrls: ['./sort-options.component.scss']
})
export class SortOptionsComponent implements OnInit {
  @Output() public setSortType: EventEmitter<string> = new EventEmitter();

  public keyword: string = '';

  constructor() { }

  public ngOnInit(): void {
  }

}
