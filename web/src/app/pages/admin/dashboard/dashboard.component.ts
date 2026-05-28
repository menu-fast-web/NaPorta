import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  greeting = (() => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Bom dia';
    if (hour < 18) return 'Boa tarde';
    return 'Boa noite';
  })();

  stats = [
    {
      label: 'Pedidos pendentes',
      value: '8',
      sub: 'aguardando preparo',
      icon: 'receipt_long',
    },
    {
      label: 'Em preparo',
      value: '3',
      sub: 'na cozinha agora',
      icon: 'restaurant',
    },
    {
      label: 'Entregues hoje',
      value: '24',
      sub: 'pedidos concluídos',
      icon: 'check_circle',
    },
    {
      label: 'Itens no cardápio',
      value: '18',
      sub: 'itens disponíveis',
      icon: 'menu_book',
    },
  ];

  recentOrders = [
    { room: '101', item: 'Filé de frango a milanesa', status: 'pending', statusLabel: 'Pendente' },
    { room: '204', item: 'Suco de laranja', status: 'preparing', statusLabel: 'Preparando' },
    { room: '302', item: 'Salada Caesar', status: 'delivered', statusLabel: 'Entregue' },
    { room: '110', item: 'Hambúrguer artesanal', status: 'pending', statusLabel: 'Pendente' },
  ];

  topItems = [
    { name: 'Filé de frango a milanesa', category: 'Almoço', orders: 38 },
    { name: 'Hambúrguer artesanal', category: 'Lanches', orders: 27 },
    { name: 'Suco de laranja', category: 'Bebidas', orders: 21 },
    { name: 'Salada Caesar', category: 'Almoço', orders: 15 },
  ];
}
