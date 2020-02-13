import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public sendSortType: EventEmitter<string> = new EventEmitter();

  public isSettingsOpened: boolean = false;

  constructor() { }

  public ngOnInit(): void {
  }

}
