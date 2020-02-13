import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public sortType: string = 'date';

  public getSortType(type: string): void {
    this.sortType = type;
    console.log(type);
  }
}
