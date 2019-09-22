import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Friend } from '../acc-dash/acc-dash.model';
import { AccFriendsService } from './acc-friends.service';

@Component({
  selector: 'app-acc-friends',
  templateUrl: './acc-friends.page.html',
  styleUrls: ['./acc-friends.page.scss'],
})
export class AccFriendsPage implements OnInit, OnDestroy {

  friends: Friend[];
  friendsSub: Subscription;

  constructor(
    private accfriendsService: AccFriendsService
  ) { }

  ngOnInit() {
    this.friendsSub = this.accfriendsService.friends.subscribe(
      (friends) => {
        console.log(friends);
        this.friends = friends;
      }
    );
  }

  ionViewWillEnter() {
    this.accfriendsService.fetchFriends().subscribe(
      (friends) => {
        console.log(friends);
        this.friends = friends;
      }
    );
  }

  ngOnDestroy() {
    if (this.friendsSub) {
      this.friendsSub.unsubscribe();
    }
  }

}
