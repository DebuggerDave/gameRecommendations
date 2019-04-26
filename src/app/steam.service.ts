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
  getFriends(steamid: number): Observable<any> {
    return this.http.get(this.url + '/steam/friends/' + steamid);
  }

  /** GET friends */
  getUserData(steamid: number): Observable<any> {
    return this.http.get<any>(this.url + '/steam/userData/' + steamid);
  }

}
