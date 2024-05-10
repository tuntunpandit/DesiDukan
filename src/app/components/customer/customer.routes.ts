import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { HomeComponent } from './home/home.component';

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
