import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { OrdersService, Order, OrderStatus } from '../../../services/orders.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  greeting = (() => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Bom dia';
    if (hour < 18) return 'Boa tarde';
    return 'Boa noite';
  })();

  stats = [
    { label: 'Pedidos pendentes', value: '0', sub: 'aguardando preparo', icon: 'receipt_long' },
    { label: 'Em preparo', value: '0', sub: 'na cozinha agora', icon: 'restaurant' },
    { label: 'Entregues hoje', value: '0', sub: 'pedidos concluídos', icon: 'check_circle' },
    { label: 'Itens no cardápio', value: '0', sub: 'itens disponíveis', icon: 'menu_book' },
  ];

  recentOrders: Order[] = [];
  statusConfig: Record<OrderStatus, { label: string; classes: string }> = {
    pending:   { label: 'Pendente',   classes: 'bg-yellow-50 text-yellow-700' },
    preparing: { label: 'Preparando', classes: 'bg-blue-50 text-blue-700' },
    delivered: { label: 'Entregue',   classes: 'bg-green-50 text-green-700' },
    cancelled: { label: 'Cancelado',  classes: 'bg-red-50 text-red-500' },
  };

  userName = '';

  constructor(private ordersService: OrdersService, private menuService: MenuService, private auth: AuthService) {}

  ngOnInit() {
    this.userName = this.auth.getUser()?.name ?? 'Administrador';
    this.ordersService.getAll().subscribe(orders => {
      this.recentOrders = orders.slice(0, 5);
      this.stats[0].value = String(orders.filter(o => o.status === 'pending').length);
      this.stats[1].value = String(orders.filter(o => o.status === 'preparing').length);
      this.stats[2].value = String(orders.filter(o => o.status === 'delivered').length);
    });

    this.menuService.getAll().subscribe(items => {
      this.stats[3].value = String(items.length);
    });
  }
}
