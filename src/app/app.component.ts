import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  usernameAdded = false;

  onClick1() {
    this.usernameAdded = true;
    //this.username = 'Victor';
  }

  pickone = true;
  numberOfColls = 3;
  // todo: modal maken?

  numberOfClicks: number[] = [];

  onClick($event){
    this.pickone = !this.pickone;
    $event.stopPropagation();
    let index = this.numberOfClicks.length;
    index = index + 1
    this.numberOfClicks.push(index);
    console.log('Button was clicked ' + this.numberOfClicks.length + ' times');
  }

  onDivClicked() {
    console.log('Div was clicked');
  }

  onKeyUp(email){
    console.log('email adres is: ' +  email);
  }

  getColor(){
    return ((this.pickone) ? 'green': 'red');
  }

  showSecret = false;

  log = [];
  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }

}
