import { Component, OnInit } from '@angular/core';
import { MenuService, MenuItem, MenuItemCategory } from '../../../services/menu.service';

const categoryLabel: Record<MenuItemCategory, string> = {
  breakfast: 'Café da manhã',
  lunch: 'Almoço',
  dinner: 'Jantar',
  drinks: 'Bebidas',
  snacks: 'Lanches',
};

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
})
export class MenuItemsComponent implements OnInit {
  items: MenuItem[] = [];
  categoryLabel = categoryLabel;
  showForm = false;
  Number = Number;

  form = {
    name: '',
    description: '',
    price: 0,
    image_url: '',
    category: 'lunch' as MenuItemCategory,
    available: true,
  };

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.getAll().subscribe(items => this.items = items);
  }

  toggleAvailable(item: MenuItem) {
    this.menuService.update(item.id, { available: !item.available }).subscribe(updated => {
      item.available = updated.available;
    });
  }

  deleteItem(id: string) {
    this.items = this.items.filter(i => i.id !== id);
  }

  submitForm() {
    this.menuService.create(this.form).subscribe(item => {
      this.items = [item, ...this.items];
      this.showForm = false;
      this.form = { name: '', description: '', price: 0, image_url: '', category: 'lunch', available: true };
    });
  }
}
