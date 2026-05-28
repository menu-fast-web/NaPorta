import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService, CartItem } from '../../services/cart.service';
import { OrdersService } from '../../services/orders.service';
import { GuestService } from '../../services/guest.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  items: CartItem[] = [];
  loading = false;
  error = '';
  Number = Number;

  constructor(
    private cartService: CartService,
    private ordersService: OrdersService,
    private guestService: GuestService,
    private router: Router
  ) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  removeItem(id: string) {
    this.cartService.removeItem(id);
    this.items = this.cartService.getItems();
  }

  updateQuantity(id: string, quantity: number) {
    if (quantity < 1) return;
    this.cartService.updateQuantity(id, quantity);
    this.items = this.cartService.getItems();
  }

  toggleCheck(id: string) {
    this.cartService.toggleCheck(id);
    this.items = this.cartService.getItems();
  }

  get checkedItems() {
    return this.items.filter(i => i.checked);
  }

  get total() {
    return this.checkedItems.reduce((acc, i) => acc + Number(i.menu_item.price) * i.quantity, 0);
  }

  finalize() {
    const guestId = this.guestService.getGuestId();
    if (!guestId) {
      this.router.navigate(['/']);
      return;
    }

    if (this.checkedItems.length === 0) {
      this.error = 'Selecione ao menos um item para finalizar.';
      return;
    }

    this.loading = true;
    this.error = '';

    const orderItems = this.checkedItems.map(i => ({
      menu_item_id: i.menu_item.id,
      quantity: i.quantity,
    }));

    this.ordersService.create(guestId, orderItems).subscribe({
      next: () => {
        this.cartService.clear();
        this.router.navigate(['/status']);
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.error ?? 'Erro ao finalizar pedido.';
      },
    });
  }
}
