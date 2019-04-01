import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Friend } from './models/friend';
import { steamKey } from './steamKey';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials' : 'true',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'GET',
    'Access-Control-Allow-Headers':'application/json'})
  };

@Injectable({
  providedIn: 'root'
})
export class SteamService {

  private key = steamKey;
  private heroesUrl = 'https://api.steampowered.com/'; // URL to web api

  constructor(private http: HttpClient) { }

   /** GET friends */
   getFriends(steamid: number): Observable<Friend[]> {
    return this.http.get<Friend[]>(this.heroesUrl + 'ISteamUser/GetFriendList/v1/?key=' + this.key + '&steamid=' + steamid + '&callback=callback');
  }

}
