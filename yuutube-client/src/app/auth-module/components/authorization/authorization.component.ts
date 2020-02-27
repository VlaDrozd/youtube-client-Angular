import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  public ngOnInit(): void {
  }

  public onSubmit(form: NgForm): void {
    if (form.form.value.login && form.form.value.pass) {
      localStorage.setItem('isAuth', 'token');
    }
  }

}
