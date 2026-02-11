import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from "@angular/router";
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { SelectModule } from 'primeng/select';
import { AccountService } from '../../services/account-service';
import { account } from '../../types/account';
@Component({
  selector: 'app-signup',
  imports: [ButtonModule, FileUploadModule,SelectModule,FormsModule, RouterModule],
  providers: [AccountService],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  router = inject(Router)
  service = inject(AccountService);
  signup = signal<account>(
    {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
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
    this.service.saveAccount(this.signup()).subscribe(
      (response) => {
        console.log('Account created successfully', response);
        localStorage.setItem('account', JSON.stringify(response));
        this.router.navigate(['/dashboard']);
      }
    )
  }
  Roles: account['role'][] = ['admin', 'organizer', 'payroll'];
  selectedRole: account['role'] ;
}

