import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

export type OrderStatus = 'pending' | 'preparing' | 'delivered' | 'cancelled';

export interface OrderItem {
  id: string;
  quantity: number;
  price: number;
  menu_item: { id: string; name: string; image_url: string };
}

export interface Order {
  id: string;
  status: OrderStatus;
  created_at: string;
  guest_id: string;
  guest: { id: string; name: string; room: { number: string } };
  items: OrderItem[];
}

@Injectable({ providedIn: 'root' })
export class OrdersService {
  constructor(private api: ApiService) {}

  getAll() {
    return this.api.get<Order[]>('/orders');
  }

  getByGuest(guestId: string) {
    return this.api.get<Order[]>(`/orders/${guestId}`);
  }

  updateStatus(id: string, status: OrderStatus) {
    return this.api.patch<Order>(`/orders/${id}/status`, { status });
  }

  create(guestId: string, items: { menu_item_id: string; quantity: number }[]) {
    return this.api.post<Order>('/orders', { guest_id: guestId, items });
  }
}
