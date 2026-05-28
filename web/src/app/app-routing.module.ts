import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrderStatusComponent } from './pages/order-status/order-status.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'menu', component: MenuComponent },
      { path: 'product/:id', component: ProductDetailsComponent },
      
      { path: 'cart', component: CartComponent },
      { path: 'status', component: OrderStatusComponent },
      
      { path: 'login', component: AdminLoginComponent },
    ],
  },
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      {
        path: 'sign-in',
        component: AdminLoginComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
