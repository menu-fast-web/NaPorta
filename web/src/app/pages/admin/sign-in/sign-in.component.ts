import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
})
export class SignInComponent {
  year = new Date().getFullYear();
  email = '';
  password = '';
  showPassword = false;

  constructor(private router: Router) {};

  onSubmit() {
    this.router.navigate(['/admin/dashboard']);
    console.log({ email: this.email, password: this.password });
  };
}
