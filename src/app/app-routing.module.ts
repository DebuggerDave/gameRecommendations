import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FriendDetailsComponent } from './friend-details/friend-details.component';
import { FriendsComponent } from './friends/friends.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'detail/:steamid', component: FriendDetailsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
