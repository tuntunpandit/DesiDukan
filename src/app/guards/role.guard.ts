import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../components/authentication/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const user = authService.getUserInfo();
  if (user && user.role === 'User') {
    return true;
  } else {
    switchRouteBaedOnRole(user.role);
    return false;
  }
};

const switchRouteBaedOnRole = (role: string) => {
  const router = inject(Router);
  switch (role) {
    case 'Admin':
      router.navigate(['/admin']);
      break;
  }
};
