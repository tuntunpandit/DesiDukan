import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { AllProdutsComponent } from './product/all-produts/all-produts.component';
import { AllCategoriesComponent } from './category/all-categories/all-categories.component';
import { CartComponent } from './product/cart/cart.component';
import { ProfileComponent } from '../common/profile/profile.component';
import { WrapperComponent } from '../common/wrapper/wrapper.component';

export const CUSTOMER_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: WrapperComponent,
        children: [
          {
            path: '',
            component: HomeComponent,
          },
          {
            path: 'products',
            component: AllProdutsComponent,
          },
          {
            path: 'products/:id',
            component: ProductDetailsComponent,
          },
          {
            path: 'categories',
            component: AllCategoriesComponent,
          },
          {
            path: 'cart',
            component: CartComponent,
          },
          {
            path: 'profile',
            component: ProfileComponent,
          },
          {
            path: '**',
            redirectTo: '',
            pathMatch: 'full',
          },
        ],
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
