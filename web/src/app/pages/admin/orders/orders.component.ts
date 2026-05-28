import { Component } from '@angular/core';

type OrderStatus = 'pending' | 'preparing' | 'delivered' | 'cancelled';

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  room: string;
  guest: string;
  status: OrderStatus;
  created_at: string;
  items: OrderItem[];
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
})
export class OrdersComponent {
  statusConfig: Record<OrderStatus, { label: string; classes: string }> = {
    pending:   { label: 'Pendente',   classes: 'bg-yellow-50 text-yellow-700' },
    preparing: { label: 'Preparando', classes: 'bg-blue-50 text-blue-700' },
    delivered: { label: 'Entregue',   classes: 'bg-green-50 text-green-700' },
    cancelled: { label: 'Cancelado',  classes: 'bg-red-50 text-red-500' },
  };

  orders: Order[] = [
    {
      id: '1', room: '101', guest: 'Carlos Silva', status: 'pending',
      created_at: '21:10',
      items: [{ name: 'Filé de frango a milanesa', quantity: 1, price: 29.90 }],
    },
    {
      id: '2', room: '204', guest: 'Ana Souza', status: 'preparing',
      created_at: '20:55',
      items: [
        { name: 'Hambúrguer artesanal', quantity: 2, price: 34.90 },
        { name: 'Suco de laranja', quantity: 2, price: 12.90 },
      ],
    },
    {
      id: '3', room: '302', guest: 'João Pereira', status: 'delivered',
      created_at: '20:30',
      items: [{ name: 'Salada Caesar', quantity: 1, price: 22.90 }],
    },
    {
      id: '4', room: '110', guest: 'Maria Lima', status: 'cancelled',
      created_at: '20:15',
      items: [{ name: 'Omelete de queijo', quantity: 1, price: 18.90 }],
    },
  ];

  total(order: Order) {
    return order.items.reduce((acc, i) => acc + i.price * i.quantity, 0);
  }

  updateStatus(order: Order, status: OrderStatus) {
    order.status = status;
  }
}
