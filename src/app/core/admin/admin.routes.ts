import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminWrapperComponent } from './admin-wrapper/admin-wrapper.component';
import { ProductsComponent } from './product/products/products.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { CategoriesComponent } from './category/categories/categories.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { ProfileComponent } from '../common/profile/profile.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminWrapperComponent,
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
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'products/add',
        component: AddProductComponent,
      },
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: 'categories/add',
        component: AddCategoryComponent,
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
