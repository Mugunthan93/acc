import { Injectable } from '@angular/core';
import { Transaction, Friend } from './acc-dash.model';
import { AuthService } from 'src/app/auth/auth.service';
import { BehaviorSubject, of, concat } from 'rxjs';
import { take, map, tap, switchMap, mergeMap } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

interface transactionData {
  Amount: number
  Category: string
  Date: Date
  Description: string
  Id: string
  Name: string
  Type: string
  UserId: string
}

interface FriendData {
  Id: string
  Name: string
  UserId: string
}

@Injectable({
  providedIn: 'root'
})
export class AccDashService {

  private _transactions = new BehaviorSubject<Transaction[]>([]);

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private route: Router,
    private loadingCtrl: LoadingController
  ) { }

  get transactions() {
    return this._transactions.asObservable();
  }

  fetchTransactions() {
    return this.authService.userId
      .pipe(
        take(1),
        switchMap(
          (userId) => {
            if (!userId) {
              throw new Error('User not found');
            }
            return this.http.get<{ [keys: string]: transactionData }>(
              `https://ionic-acc.firebaseio.com/transactions.json?orderBy="UserId"&equalTo="${userId}"`
            )
          }),
        map((resData) => {
          const transactions = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              transactions.push(
                new Transaction(
                  key,
                  resData[key].Name,
                  resData[key].Date,
                  resData[key].Type,
                  resData[key].Category,
                  resData[key].Amount,
                  resData[key].Description,
                  resData[key].UserId
                )
              );
            }
          }
          return transactions;
        }),
        tap((transactions) => {
          this._transactions.next(transactions);
        })
      );
  }

  getTransaction(id: string) {
    return this.transactions
      .pipe(
        take(1), map(
          (transactions) => {
            console.log(transactions);
            return {
              ...transactions.find(
                p => p.Id === id
              )
            }
          }
        )
      );
  }

  addTransaction(Name: string, date: Date, Type: string, Category: string, Amount: number, Description: string) {

    let generatedId: string;
    let newTransaction: Transaction;
    let newFriend: Friend;
    let id = Math.random().toString();

    const userId = this.authService.userId
      .pipe(
        take(1),
        switchMap(
          (userId) => {
            if (!userId) {
              throw new Error('No user Id ');
            }

            return of(userId);
          }
        )
      );

    const newTransactionSub = userId
      .pipe(
        take(1),
        mergeMap(
          (resData) => {
            newTransaction = new Transaction(
              id,
              Name,
              date,
              Type,
              Category,
              Amount,
              Description,
              resData
            );
            return this.http.post<{ Name: string }>
              (
                'https://ionic-acc.firebaseio.com/transactions.json',
                { ...newTransaction, id: null }
              )
          }
        ),
        switchMap(
          (resData) => {
            //name of the stored object in DB
            generatedId = resData.Name;
            return this.transactions;
          }
        ),
        take(1),
        tap(
          (transactions) => {
            //array of all the object in transition
            newTransaction.Id = generatedId;
            this._transactions.next(
              transactions.concat(newTransaction)
            );
          })
      );

    const friendListSub = userId
      .pipe(
        take(1),
        mergeMap(
          (resData) => {
            return this.http.get<{ [keys: string]: FriendData }>
              (
                `https://ionic-acc.firebaseio.com/friends.json?orderBy="UserId"&equalTo="${resData}"`
              )
          }
        ),
        map(
          (resData) => {
            const friends = [];
            for (const key in resData) {
              if (resData.hasOwnProperty(key)) {
                friends.push(
                  new Friend(
                    resData[key].Id,
                    resData[key].Name,
                    resData[key].UserId
                  )
                );
              }
            }
            return friends;
          }
        ),
        tap((friends) => {
          return of(friends);
        })
      );


    const newFriendSub = friendListSub
      .pipe(
        mergeMap(
          (resData) => {
            console.log(resData);

            let isFriend: boolean = false;
            let friendId: string;

            for (var i = 0; i < resData.length; i++) {
              if (resData[i].Name == Name) {
                isFriend = true;
              }
            }

            userId.subscribe(
              (resData) => {
                friendId = resData;
              }
            );

            if (isFriend == false) {
              newFriend = new Friend(
                id,
                Name,
                friendId
              );

              return this.http.post<{ Name: string }>
                (
                  'https://ionic-acc.firebaseio.com/friends.json',
                  { ...newFriend, id: null }
                )
            }
            else {
              return of(null);
            }
          }
        ),
        tap(
          (resData) => {
            console.log(resData);
            return resData;
          }
        )
      );

    return concat(newTransactionSub, newFriendSub)
      .subscribe(
        (resData) => {
          console.log(resData);
          this.loadingCtrl.dismiss().catch(() => { });
          this.route.navigate(['home', 'dashboard']);
        }
      );
  }

}