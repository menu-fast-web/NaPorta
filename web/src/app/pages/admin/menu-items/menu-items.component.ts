import { Component } from '@angular/core';

enum MenuItemCategory {
  breakfast = 'Café da manhã',
  lunch = 'Almoço',
  dinner = 'Jantar',
  drinks = 'Bebidas',
  snacks = 'Lanches',
}

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: keyof typeof MenuItemCategory;
  available: boolean;
}

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
})
export class MenuItemsComponent {
  categoryLabel = MenuItemCategory;

  items: MenuItem[] = [
    { id: '1', name: 'Filé de frango a milanesa', description: 'Servido com arroz e salada', price: 29.90, image_url: 'assets/images/card-menu.avif', category: 'lunch', available: true },
    { id: '2', name: 'Hambúrguer artesanal', description: 'Pão brioche, carne 180g, queijo e molho especial', price: 34.90, image_url: 'assets/images/card-menu.avif', category: 'snacks', available: true },
    { id: '3', name: 'Suco de laranja', description: 'Suco natural 300ml', price: 12.90, image_url: 'assets/images/card-menu.avif', category: 'drinks', available: true },
    { id: '4', name: 'Salada Caesar', description: 'Alface, croutons, parmesão e molho caesar', price: 22.90, image_url: 'assets/images/card-menu.avif', category: 'lunch', available: false },
    { id: '5', name: 'Omelete de queijo', description: 'Omelete com queijo prato e ervas finas', price: 18.90, image_url: 'assets/images/card-menu.avif', category: 'breakfast', available: true },
  ];

  toggleAvailable(item: MenuItem) {
    item.available = !item.available;
  }

  deleteItem(id: string) {
    this.items = this.items.filter(i => i.id !== id);
  }
}
