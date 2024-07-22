import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../core/authentication/auth.service';

export const customerGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const user = authService.getUserInfo();
  const router = inject(Router);
  console.log('Customer ....');
  if (user && user.isAdmin) {
    router.navigate(['/admin']);
    return false;
  } else {
    return true;
  }
};
