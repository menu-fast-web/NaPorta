import { Component } from '@angular/core';
import { GuestService, Guest } from '../../services/guest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  guest: Guest | null = null;

  constructor(private guestService: GuestService) {
    this.guest = this.guestService.getGuestData();
  }
}
