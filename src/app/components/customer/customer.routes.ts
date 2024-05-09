import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';

export const CUSTOMER_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: '',
            component: HomeComponent,
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
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
