import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
})
export class SignInComponent {
  year = new Date().getFullYear();
  email = '';
  password = '';
  showPassword = false;
  error = '';

  constructor(private router: Router, private auth: AuthService) {}

  onSubmit() {
    this.auth.login(this.email, this.password).subscribe({
      next: () => this.router.navigate(['/admin/dashboard']),
      error: () => this.error = 'E-mail ou senha inválidos.',
    });
  }
}
