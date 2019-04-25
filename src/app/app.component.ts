import { Component } from '@angular/core';
import { SteamService } from './steam.service';
import { Friend } from './models/friend';

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
    private friendService: SteamService
    ) { }

  onClick() {
    this.friendService.getFriends(this.steamID).subscribe(friends => this.friends = friends);
  }

}
