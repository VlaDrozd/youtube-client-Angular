import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/auth-service/authorization.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public sub: Subscription;
  public isAuth: boolean;

  constructor(public authService: AuthorizationService) {
  }
  public ngOnInit(): void {
    this.sub = this.authService.auth$.subscribe(state => {
      this.isAuth = state;
    });
  }
}
