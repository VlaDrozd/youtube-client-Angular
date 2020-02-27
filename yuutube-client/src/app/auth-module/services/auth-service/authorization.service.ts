import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  constructor() {
  }

  public login(login: string, password: string): void {
    localStorage.setItem('isAuth', 'token');
  }

  public logout(): void {
    localStorage.clear();
  }
}
