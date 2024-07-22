import { Routes } from '@angular/router';
import { CWrapperComponent } from './layout/wrapper/c-wrapper.component';
import { HomeComponent } from './home/home.component';

export const CUSTOMER_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CWrapperComponent,
        children: [
          {
            path: '',
            component: HomeComponent,
          },
          // {
          //   path: 'products',
          //   component: AllProdutsComponent,
          // },
          // {
          //   path: 'products/:id',
          //   component: ProductDetailsComponent,
          // },
          // {
          //   path: 'categories',
          //   component: AllCategoriesComponent,
          // },
          // {
          //   path: 'cart',
          //   component: CartComponent,
          // },
          // {
          //   path: 'profile',
          //   component: ProfileComponent,
          // },
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
