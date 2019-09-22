import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Friend } from '../acc-dash/acc-dash.model';
import { take, switchMap, map, tap } from 'rxjs/operators';

interface FriendData {
  Id: string
  Name: string
  UserId: string
}

@Injectable({
  providedIn: 'root'
})
export class AccFriendsService {

  private _friends = new BehaviorSubject<Friend[]>([]);

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) { }

  get friends() {
    return this._friends.asObservable();
  }

  getFriends(id: string) {
    return this.friends
      .pipe(
        take(1), map(
          (friends) => {
            console.log(friends);
            return {
              ...friends.find(
                p => p.Id === id
              )
            }
          }
        )
      );
  }

  fetchFriends() {
    return this.authService.userId
      .pipe(
        take(1),
        switchMap(
          (userId) => {
            if (!userId) {
              throw new Error('User not found');
            }
            return this.http.get<{ [keys: string]: FriendData }>(
              `https://ionic-acc.firebaseio.com/friends.json?orderBy="UserId"&equalTo="${userId}"`
            )
          }),
        map((resData) => {
          const Friends = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              Friends.push(
                new Friend(
                  resData[key].Id,
                  resData[key].Name,
                  resData[key].UserId
                )
              );
            }
          }
          return Friends;
        }),
        tap((Friends) => {
          this._friends.next(Friends);
        })
      );
  }
}
