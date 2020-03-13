import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isSettingsOpened: boolean = false;
  public userQuestion: string;
  public request: Subject<string> = new Subject<string>();

  constructor(private router: Router) { }

  public ngOnInit(): void {
    this.request.pipe(
      filter(value => value.length >= 3),
      debounceTime(1000),
      distinctUntilChanged())
      .subscribe(value => {
        if (value) {
          this.router.navigate(
            ['/'],
            {
              queryParams: {
                'search_query': value,
              }
            }
          );
        }
      }
      );
  }

}
