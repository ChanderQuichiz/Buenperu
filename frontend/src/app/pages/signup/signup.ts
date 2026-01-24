import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signup',
  imports: [],
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

