import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrderStatusComponent } from './pages/order-status/order-status.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { StatusTimelineComponent } from './components/status-timeline/status-timeline.component';
import { ButtonComponent } from './components/button/button.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ProductDetailsComponent,
    CartComponent,
    OrderStatusComponent,
    NavbarComponent,
    ProductCardComponent,
    CategoryListComponent,
    CartItemComponent,
    StatusTimelineComponent,
    ButtonComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
