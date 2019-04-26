import { Component } from '@angular/core';
import { SteamService } from './steam.service';
import { Friend } from './models/friend';
import { EACCES } from 'constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gameRecommendations';
  steamID: number;
  friends: Friend[];

  constructor(
    private steamService: SteamService
    ) { }

  onClick() {
    this.steamService.getFriends(this.steamID).subscribe(friends => {
      this.friends = friends.friendslist.friends;
      friends.friendslist[0].name = 'myBoy';
      console.log(this.friends);
      // for (let i = 0; i < this.friends.length; ++i) {
      //   this.steamService.getUserData(this.friends[i].steamid)
      //   .subscribe(data => this.friends[i].name = data.realname)
      // }
    });
  }

}
