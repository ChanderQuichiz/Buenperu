import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signin',
  imports: [],
  templateUrl: './signin.html',
  styleUrl: './signin.css',
})
export class Signin {
  signin = signal({
    email: '',
    password: ''
  })
  writeSignin(event: Event) {
    const target = event.target as HTMLInputElement;
    this.signin.set(({
      ...this.signin(),
      [target.name]: target.value
    }));
  }
  sendSignin() {
    console.log(this.signin());
  }
}
