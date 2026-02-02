import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { SelectModule } from 'primeng/select';
@Component({
  selector: 'app-signup',
  imports: [RouterLink,ButtonModule, FileUploadModule,SelectModule,FormsModule],
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
      confirmPassword: '',
      role: ''
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
  Roles: string[] = ["organizer", "payroll"];
  selectedRole: string = '';
}

