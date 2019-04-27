import { Component, OnInit } from '@angular/core';
import { SteamService } from '../steam.service';
import { Friend } from '../models/friend';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  steamid: string;
  friends: Friend[];

  constructor(
    private cookieService: CookieService,
    private steamService: SteamService,
    private router: Router
    ) { }

  ngOnInit() {
    this.steamid = this.cookieService.get('steamid');
    this.steamService.getFriends(this.steamid).subscribe(friends => {
      console.log(friends);
      this.friends = friends.friendslist.friends;
      for (const friend of this.friends) {
        this.steamService.getUserData(String(friend.steamid)).subscribe(data => friend.name = data.response.players.player[0].personaname);
      }
    });
  }

  navigate(steamid: string) {
    this.router.navigateByUrl('/detail/' + steamid);
  }

}
