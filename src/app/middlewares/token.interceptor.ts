import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../components/authentication/auth.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = inject(AuthService).getJwtToken();

  if (authToken) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    return next(authReq);
  }
  return next(req);
};
