import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

export interface Guest {
  id: string;
  name: string;
  token: string;
  room: { id: string; number: string };
}

@Injectable({ providedIn: 'root' })
export class GuestService {
  private guestKey = 'naporta_guest_id';

  constructor(private api: ApiService) {}

  getByToken(token: string) {
    return this.api.get<Guest>(`/guests/${token}`);
  }

  saveGuest(id: string) {
    localStorage.setItem(this.guestKey, id);
  }

  saveGuestData(guest: Guest) {
    localStorage.setItem(this.guestKey, guest.id);
    localStorage.setItem('naporta_guest_data', JSON.stringify(guest));
  }

  getGuestData(): Guest | null {
    const data = localStorage.getItem('naporta_guest_data');
    if (!data) return null;
    try {
      return JSON.parse(data);
    } catch {
      return null;
    }
  }

  getGuestId(): string | null {
    return localStorage.getItem(this.guestKey);
  }

  clear() {
    localStorage.removeItem(this.guestKey);
  }
}