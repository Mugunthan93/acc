import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userIsAuthenticated = false;
  private _userId = 'abc';


  constructor(private http: HttpClient) { }

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  get userId() {
    return this._userId;
  }

  signup(email: string, password: string) {
    // this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]')
  }

  login() {
    this._userIsAuthenticated = true;
  }

  logout() {
    this._userIsAuthenticated = false;
  }
}
