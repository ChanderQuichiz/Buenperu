import { Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-signin',
  imports: [RouterLink],
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
