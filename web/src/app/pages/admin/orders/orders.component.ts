import { Component, OnInit } from '@angular/core';
import { OrdersService, Order, OrderStatus } from '../../../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];

  statusConfig: Record<OrderStatus, { label: string; classes: string }> = {
    pending:   { label: 'Pendente',   classes: 'bg-yellow-50 text-yellow-700' },
    preparing: { label: 'Preparando', classes: 'bg-blue-50 text-blue-700' },
    delivered: { label: 'Entregue',   classes: 'bg-green-50 text-green-700' },
    cancelled: { label: 'Cancelado',  classes: 'bg-red-50 text-red-500' },
  };

  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    this.ordersService.getAll().subscribe(orders => this.orders = orders);
  }

  total(order: Order) {
    return order.items.reduce((acc, i) => acc + Number(i.price) * i.quantity, 0);
  }

  updateStatus(order: Order, status: OrderStatus) {
    this.ordersService.updateStatus(order.id, status).subscribe(updated => {
      order.status = updated.status;
    });
  }
}
