import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './product/products/products.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { CategoriesComponent } from './category/categories/categories.component';
import { ProfileComponent } from '../common/profile/profile.component';
import { WrapperComponent } from '../common/wrapper/wrapper.component';

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
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'product',
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
        path: 'category',
        component: CategoriesComponent,
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
