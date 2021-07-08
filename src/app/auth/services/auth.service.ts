import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private store: Store<AppState>, private http: HttpClient) {}

  getUser(): Observable<User> {
    return this.http.get<User>('/api/auth/account').pipe(
      shareReplay(),
    );
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>('/api/auth/login', { email, password })
      .pipe(
        shareReplay(),
      );
  }

  register(email: string, password: string, passwordConfirmation: string): Observable<User> {
    return this.http.post<User>('/api/auth/register', { email, password, passwordConfirmation })
      .pipe(
        shareReplay(),
      );
  }

  logout(): Observable<User> {
    return this.http.post<User>('/api/auth/logout', {})
  }
}
