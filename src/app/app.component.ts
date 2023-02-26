import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(public auth:AuthService){}

  title = 'airline';
  value = localStorage.getItem('loggedUser');
  onLogout(){
  this.auth.logout();

  }
}
