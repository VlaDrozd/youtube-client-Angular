import { Injectable } from '@angular/core';
import { LoginInfo } from '../../../shared-module/models/login-info';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private userName: string;

  private token: string;

  private isLogged: boolean = false;

  constructor() {
    if (localStorage.getItem('isAuth')) {
      const logInfo: LoginInfo = JSON.parse(localStorage.getItem('isAuth'));
      this.userName = logInfo.login;
      this.token = logInfo.token;
      this.isLogged = true;
    }
  }

  public login(login: string, password: string): void {
    let logInfo: LoginInfo = {
      token: 'token',
      login: 'login'
    };
    localStorage.setItem('isAuth', JSON.stringify(logInfo));
    this.isLogged = !this.isLogged;
    this.userName = login;
  }

  public logout(): void {
    this.userName = '';
    this.isLogged = !this.isLogged;
    localStorage.clear();
  }

  public getUserLogin(): string {
    return this.userName || 'Your Name';
  }

  public isAuthorized(): boolean {
    return this.isLogged;
  }
}
