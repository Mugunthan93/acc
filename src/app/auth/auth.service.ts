import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, from } from 'rxjs';
import { User } from './auth.model';
import { map, tap } from 'rxjs/operators';
import { AuthResponseData } from './auth.model'
import { Plugins } from '@capacitor/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user = new BehaviorSubject<User>(null);


  constructor(private http: HttpClient) { }

  autoLogin() {
    return from(Plugins.Storage.get({
      key: 'AuthData'
    }))
      .pipe(
        map(
          (storedData) => {
            if (!storedData || !storedData.value) {
              return null;
            }
            const parsedData = JSON.parse(storedData.value) as {
              token: string;
              tokenExpDate: string;
              userId: string;
              email: string;
            };
            const expTime = new Date(parsedData.tokenExpDate);
            if (expTime <= new Date()) {
              return null;
            }
            const user = new User(
              parsedData.userId,
              parsedData.email,
              parsedData.token,
              expTime
            );
            return user;
          }
        ),
        tap(
          (user) => {
            if (user) {
              this._user.next(user);
            }
          }
        ),
        map(
          (user) => {
            return !!user;
          }
        )
      );
  }

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
              return user.id;
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
          this.setUserData.bind(this)
        )
      );
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
          this.setUserData.bind(this)
        )
      );
  }

  logout() {
    this._user.next(null);
    Plugins.Storage.remove({
      key: 'AuthData'
    });
  }

  private setUserData(resData: AuthResponseData) {
    const expDate = new Date(new Date().getTime() + (+resData.expiresIn * 1000));
    this._user.next(new User(
      resData.localId,
      resData.email,
      resData.idToken,
      expDate
    ));
    this.storeAuthData(resData.localId, resData.idToken, expDate.toISOString(), resData.email)
  }

  private storeAuthData(userId: string, token: string, tokenExpDate: string, email: string) {
    const data = JSON.stringify({
      userId: userId,
      token: token,
      tokenExpDate: tokenExpDate,
      email: email
    });
    Plugins.Storage.set({
      key: 'AuthData',
      value: data
    });

  }
}
