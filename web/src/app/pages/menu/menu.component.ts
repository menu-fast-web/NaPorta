import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  items = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: 'Filé de frango a milanesa',
    description: 'Filé de frango a milanesa, servido com arroz e salada',
    price: 29.90,
    oldPrice: 39.90,
    discount: 25,
    serves: 2,
    time: 30,
    image: 'assets/images/card-menu.avif',
  }));
}
