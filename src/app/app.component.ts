import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  usernameAdded = false;

  onClick() {
    this.usernameAdded = true;
    //this.username = 'Victor';
  }
}
