import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Friend } from './models/friend';

@Injectable({
  providedIn: 'root'
})
export class SteamService {

  private url = 'http://localhost:4000'; // URL to web api

  constructor(private http: HttpClient) { }

  /** GET friends */
  getFriends(steamid: string): Observable<any> {
    return this.http.get(this.url + '/steam/friends/' + steamid);
  }

  /** GET friends */
  getUserData(steamid: string): Observable<any> {
    return this.http.get<any>(this.url + '/steam/userData/' + steamid);
  }

  getOwnedGames(steamid: string): Observable<any> {
    return this.http.get<any>(this.url + '/steam/ownedGames/' + steamid);
  }

  getGameSchema(appid: string): Observable<any> {
    return this.http.get<any>(this.url + '/steam/gameSchema/' + appid);
  }

  getUnofficialGameSchema(appid: string): Observable<any> {
    return this.http.get<any>(this.url + '/steam/gameSchema/unofficial/' + appid);
  }

}
