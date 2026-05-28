import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuestService } from '../../services/guest.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
})
export class GuestComponent implements OnInit {
  error = false;

  constructor(
    private route: ActivatedRoute,
    private guestService: GuestService,
    private router: Router
  ) {}

  ngOnInit() {
    const token = this.route.snapshot.paramMap.get('token');

    if (!token) {
      this.router.navigate(['/']);
      return;
    }

    this.guestService.getByToken(token).subscribe({
      next: (guest) => {
        this.guestService.saveGuestData(guest);
        this.router.navigate(['/']);
      },
      error: () => this.error = true,
    });
  }
}