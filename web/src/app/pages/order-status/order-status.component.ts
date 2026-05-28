import { Component, OnInit } from '@angular/core';
import { OrdersService, Order, OrderStatus } from '../../services/orders.service';
import { GuestService } from '../../services/guest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
})
export class OrderStatusComponent implements OnInit {
  orders: Order[] = [];
  loading = true;
  Number = Number;

  statusConfig: Record<OrderStatus, { label: string; classes: string }> = {
    pending:   { label: 'Pendente',   classes: 'bg-yellow-50 text-yellow-700' },
    preparing: { label: 'Preparando', classes: 'bg-blue-50 text-blue-700' },
    delivered: { label: 'Entregue',   classes: 'bg-green-50 text-green-700' },
    cancelled: { label: 'Cancelado',  classes: 'bg-red-50 text-red-500' },
  };

  constructor(
    private ordersService: OrdersService,
    private guestService: GuestService,
    private router: Router
  ) {}

  ngOnInit() {
    const guestId = this.guestService.getGuestId();

    if (!guestId) {
      this.router.navigate(['/']);
      return;
    }

    this.ordersService.getByGuest(guestId).subscribe({
      next: (orders) => {
        this.orders = orders;
        this.loading = false;
      },
      error: () => this.loading = false,
    });
  }

  total(order: Order) {
    return order.items.reduce((acc, i) => acc + Number(i.price) * i.quantity, 0);
  }
}
