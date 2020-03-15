import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/auth-service/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(public authService: AuthorizationService, private router: Router) { }

  public ngOnInit(): void {
  }

}
