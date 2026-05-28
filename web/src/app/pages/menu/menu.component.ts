import { Component, OnInit } from '@angular/core';
import { MenuService, MenuItem, MenuItemCategory } from '../../services/menu.service';
import { CartService } from '../../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastComponent } from '../../components/toast/toast.component';

const categoryLabel: Record<MenuItemCategory, string> = {
  breakfast: 'Café da manhã',
  lunch: 'Almoço',
  dinner: 'Jantar',
  drinks: 'Bebidas',
  snacks: 'Lanches',
};

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  private allItems: MenuItem[] = [];
  search = '';
  pageSize = 6;
  currentPage = 1;
  Number = Number;
  categoryLabel = categoryLabel;

  constructor(private menuService: MenuService, private cartService: CartService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.menuService.getAll().subscribe(items => this.allItems = items);
  }

  get top3() {
    return this.allItems.slice(0, 3);
  }

  get filtered() {
    if (!this.search.trim()) return this.allItems;
    const q = this.search.toLowerCase();
    return this.allItems.filter(i =>
      i.name.toLowerCase().includes(q) || i.description.toLowerCase().includes(q)
    );
  }

  get totalPages() {
    return Math.ceil(this.filtered.length / this.pageSize);
  }

  get pages() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get pagedItems() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filtered.slice(start, start + this.pageSize);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) this.currentPage = page;
  }

  onSearch() {
    this.currentPage = 1;
  }

  addToCart(item: MenuItem) {
    this.cartService.addItem(item);
    this.snackBar.openFromComponent(ToastComponent, {
      data: { message: `${item.name} adicionado ao carrinho` },
      duration: 2500,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: ['toast-success'],
    });
  }
}
