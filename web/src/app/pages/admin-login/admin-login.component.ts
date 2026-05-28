import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
})
export class AdminLoginComponent {
  email = '';
  password = '';
  showPassword = false;
  year = new Date().getFullYear();

  onSubmit() {
    console.log({ email: this.email, password: this.password });
  }
}
