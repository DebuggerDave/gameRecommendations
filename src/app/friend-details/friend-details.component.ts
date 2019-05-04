import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SteamService } from '../steam.service';
import { UserData } from '../models/userData';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-friend-details',
  templateUrl: './friend-details.component.html',
  styleUrls: ['./friend-details.component.css']
})
export class FriendDetailsComponent implements OnInit {
  friendSteamid: string;
  steamid: string;
  friendData: any;
  friendGames: any[];
  games: any[];
  gamesInCommon: any[] = [];

  constructor(
    private cookieService: CookieService,
    private route: ActivatedRoute,
    private steamService: SteamService
  ) { }

  ngOnInit() {
    this.getFriend();
  }

  getFriend(): void {
    this.friendSteamid = this.route.snapshot.paramMap.get('steamid');
    this.steamid = this.cookieService.get('steamid');
    this.steamService.getUserData(this.friendSteamid).subscribe(data => {
      this.friendData = data.response.players.player[0];
      console.log(this.friendData);
    });
    this.steamService.getOwnedGames(this.friendSteamid).subscribe(data => {
      this.friendGames = data.response.games;
      console.log(this.friendGames);
      this.steamService.getOwnedGames(this.steamid).subscribe(data2 => {
        this.games = data2.response.games;
        console.log(this.games);
        for (const game of this.games) {
          for (const friendGame of this.friendGames) {
            if (game.appid === friendGame.appid) {
              this.gamesInCommon.push(game);
            }
          }
        }
        for (const game of this.gamesInCommon) {
          if (game) {
            this.steamService.getUnofficialGameSchema(game.appid).subscribe(data3 => { 
              game.name = data3[game.appid].data.name;
            });
          }
        }
      });
    });
    this.steamService.getOwnedGames(this.steamid).subscribe(data => {
      this.games = data.response.games;
      console.log(this.games);
    });
  }

}
