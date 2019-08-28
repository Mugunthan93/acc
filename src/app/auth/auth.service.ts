import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { User } from './auth.model';
import { map, tap } from 'rxjs/operators';
import { AuthResponseData } from './auth.model'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user = new BehaviorSubject<User>(null);


  constructor(private http: HttpClient) { }

  get userIsAuthenticated() {
    return this._user
      .asObservable()
      .pipe(
        map(
          (user) => {
            if (user) {
              return !!user.Token;
            }
            else {
              return false;
            }
          }
        )
      );
  }

  get userId() {
    return this._user
      .asObservable()
      .pipe(
        map(
          (user) => {
            if (user) {
              return !!user.id;
            }
            else {
              return null;
            }
          }
        )
      );
  }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
      .pipe(
        tap(
          this.setUserDate.bind(this)
        )
      )
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
      .pipe(
        tap(
          this.setUserDate.bind(this)
        )
      )
  }

  logout() {
    this._user.next(null);
  }

  private setUserDate(resData) {
    const expDate = new Date(new Date().getTime() + (+resData.tokenExpirationDate * 1000));
    this._user.next(new User(
      resData.id,
      resData.email,
      resData._token,
      expDate
    ));
  }
}
