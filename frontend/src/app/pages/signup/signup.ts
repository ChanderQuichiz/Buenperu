import { Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-signup',
  imports: [RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  signup = signal(
    {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  )
  writeSignup(event: Event) {
    const target = event.target as HTMLInputElement;
    this.signup.set(({
      ...this.signup(),
      [target.name]: target.value
    }));
  }
  sendSignup() {
    console.log(this.signup());
  }
}

