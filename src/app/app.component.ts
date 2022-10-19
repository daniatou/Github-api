import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-ang-app';
  username: string = '';

  onSubmit(){
    console.log('Hello', this.username)

    if (this.username.length) {
      
    } else {
      alert('Field is empty');
    } 

  }
}


