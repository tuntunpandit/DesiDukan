import { Routes } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { authGuard } from './guards/auth.guard';
import { homeGuard } from './guards/home.guard';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
  {
    path: 'login',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'signup',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: SignupComponent,
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    canActivate: [homeGuard],
    children: [
      {
        path: 'admin',
        canActivate: [adminGuard],
        loadChildren: () =>
          import('./components/admin/admin.routes').then((m) => m.ADMIN_ROUTES),
      },
      {
        path: '',
        loadChildren: () =>
          import('./components/customer/customer.routes').then(
            (m) => m.CUSTOMER_ROUTES
          ),
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
