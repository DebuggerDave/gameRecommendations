import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  steamid: string;

  constructor(
    private cookieService: CookieService,
    private router: Router
    ) { }

  ngOnInit() {}

  login() {
    this.cookieService.set( 'steamid', this.steamid );
    this.router.navigateByUrl('/friends');
  }

}
