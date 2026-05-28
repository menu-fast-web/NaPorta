import { Injectable } from '@angular/core';
import { MenuItem } from './menu.service';

export interface CartItem {
  menu_item: MenuItem;
  quantity: number;
  checked: boolean;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartKey = 'naporta_cart';

  getItems(): CartItem[] {
    const data = localStorage.getItem(this.cartKey);
    if (!data) return [];
    try {
      return JSON.parse(data);
    } catch {
      return [];
    }
  }

  addItem(item: MenuItem) {
    const items = this.getItems();
    const existing = items.find(i => i.menu_item.id === item.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      items.push({ menu_item: item, quantity: 1, checked: true });
    }
    this.save(items);
  }

  removeItem(id: string) {
    const items = this.getItems().filter(i => i.menu_item.id !== id);
    this.save(items);
  }

  updateQuantity(id: string, quantity: number) {
    const items = this.getItems();
    const item = items.find(i => i.menu_item.id === id);
    if (item) item.quantity = quantity;
    this.save(items);
  }

  toggleCheck(id: string) {
    const items = this.getItems();
    const item = items.find(i => i.menu_item.id === id);
    if (item) item.checked = !item.checked;
    this.save(items);
  }

  clear() {
    localStorage.removeItem(this.cartKey);
  }

  private save(items: CartItem[]) {
    localStorage.setItem(this.cartKey, JSON.stringify(items));
  }
}
