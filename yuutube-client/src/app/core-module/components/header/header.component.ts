import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isSettingsOpened: boolean = false;
  public request: string = '';

  constructor(private router: Router) { }

  public ngOnInit(): void {
  }

  public sendRequest(): void {
    if (this.request) {
      this.router.navigate(
        ['/'],
        {
          queryParams: {
            'search_query': this.request,
          }
        }
      );
    }
  }

}
