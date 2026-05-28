import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'naporta_token';

  constructor(private api: ApiService) {}

  login(email: string, password: string) {
    const emailToLowerCase = email.trim().toLowerCase();
    return this.api.post<{ token: string }>('/sessions', { email: emailToLowerCase, password }).pipe(
      tap(({ token }) => localStorage.setItem(this.tokenKey, token))
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  getUser(): { name: string } | null {
    const token = localStorage.getItem(this.tokenKey);
    if (!token) return null;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return { name: payload.name };
    } catch {
      return null;
    }
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }
}