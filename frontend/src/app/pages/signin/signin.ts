import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { AccountService } from '../../services/account-service';

@Component({
  selector: 'app-signin',
  imports: [RouterLink],
  templateUrl: './signin.html',
  styleUrl: './signin.css',
})
export class Signin {
  router = inject(Router);
  service = inject(AccountService);
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
    this.service.signin(this.signin()).subscribe(
      (response) => {
        localStorage.setItem('account', JSON.stringify(response));
this.router.navigate(['/dashboard']);
      }
    )
  }
}
