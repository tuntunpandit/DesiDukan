import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminWrapperComponent } from './admin-wrapper/admin-wrapper.component';
import { ProductsComponent } from './product/products/products.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { CategoriesComponent } from './category/categories/categories.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';

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
        component: AdminProfileComponent,
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
