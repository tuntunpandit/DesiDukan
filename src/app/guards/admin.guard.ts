import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../core/authentication/auth.service';
import { Role } from '../utility/role.enum';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const user = authService.getUserInfo();
  console.log('user', user);
  console.log('check', user.role === Role.ADMIN);

  const router = inject(Router);
  if (user && user.role === Role.ADMIN) {
    return true;
  } else {
    authService.logout();
    router.navigate(['/login']);
    return false;
  }
};
