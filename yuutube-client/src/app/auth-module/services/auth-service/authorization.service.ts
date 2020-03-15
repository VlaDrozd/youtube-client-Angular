import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  public auth$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(!!localStorage.getItem('isAuth'));

  constructor() {
  }

  public login(login: string, password: string): void {
    localStorage.setItem('isAuth', 'token');
    this.auth$.next(true);
  }

  public logout(): void {
    localStorage.clear();
    this.auth$.next(true);
  }
}
