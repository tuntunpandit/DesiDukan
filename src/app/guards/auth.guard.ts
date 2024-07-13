import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../core/common/authentication/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const isUserLoggedIn = authService.isUserLoggedin();
  const router = inject(Router);
  if (!isUserLoggedIn) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};
