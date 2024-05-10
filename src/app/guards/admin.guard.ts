import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../components/authentication/auth.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const user = authService.getUserInfo();
  const router = inject(Router);

  if (user && user.role === 'Admin') {
    return true;
  } else {
    authService.logout();
    router.navigate(['/login']);
    return false;
  }
};
