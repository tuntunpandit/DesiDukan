import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './product/products/products.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { CategoriesComponent } from './category/categories/categories.component';
import { ProfileComponent } from '../common/profile/profile.component';
import { WrapperComponent } from '../common/wrapper/wrapper.component';
import { BrandsComponent } from './brand/brands/brands.component';
import { ColorsComponent } from './color/colors/colors.component';
import { OrdersComponent } from './order/orders/orders.component';
import { CouponsComponent } from './coupon/coupons/coupons.component';
import { ReviewsComponent } from './review/reviews/reviews.component';
import { OrderDetailsComponent } from './order/order-details/order-details.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'dashboard',
        component: AdminDashboardComponent,
      },
      {
        path: 'orders',
        component: OrdersComponent,
      },
      {
        path: 'orders/:id',
        component: OrderDetailsComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'products/add',
        component: AddProductComponent,
      },
      {
        path: 'product/edit/:id',
        component: AddProductComponent,
      },
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: 'brands',
        component: BrandsComponent,
      },
      {
        path: 'colors',
        component: ColorsComponent,
      },
      {
        path: 'coupons',
        component: CouponsComponent,
      },
      {
        path: 'reviews',
        component: ReviewsComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
