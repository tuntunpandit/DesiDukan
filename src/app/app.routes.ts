import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { homeGuard } from './guards/home.guard';
import { adminGuard } from './guards/admin.guard';
import { customerGuard } from './guards/customer.guard';
import { LoginComponent } from './core/authentication/login/login.component';
import { SignupComponent } from './core/authentication/signup/signup.component';

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
          import('./core/admin/admin.routes').then((m) => m.ADMIN_ROUTES),
      },
      {
        path: '',
        canActivate: [customerGuard],
        loadChildren: () =>
          import('./core/customer/customer.routes').then(
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
