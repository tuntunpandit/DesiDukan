import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../core/authentication/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const user = authService.getUserInfo();
  console.log('Admin.....');
  const router = inject(Router);
  if (user && user.isAdmin) {
    return true;
  } else {
    const isUserLoggedin = authService.isUserLoggedin();
    if (isUserLoggedin) {
      router.navigate(['/']);
    } else {
      authService.logout();
      router.navigate(['/login']);
    }
    return false;
  }
};
