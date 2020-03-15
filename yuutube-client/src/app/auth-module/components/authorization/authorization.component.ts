import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../services/auth-service/authorization.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  constructor(private router: Router, private authService: AuthorizationService) {}

  public ngOnInit(): void {
  }

  public onSubmit(form: NgForm): void {
    if (form.form.value.login && form.form.value.pass) {
      this.authService.login(form.form.value.login, form.form.value.pass);
      this.router.navigate(['/']);
    }
  }

}
