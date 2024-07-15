import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../core/common/authentication/auth.service';

export const ErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  return next(req).pipe(
    catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          authService.logout();
          return next(req);
          // const refreshToken = authService.getRefreshToken();
          // console.log('refreshToken', refreshToken);
          // authService.refreshToken().subscribe({
          //   next: (res: any) => {
          //     console.log(res);
          //     return next(req);
          //   },
          //   error: (err: any) => {
          //     console.log(err);
          //     return throwError(() => err);
          //   },
          // });
        }
      }
      return throwError(() => err);
    })
  );
};
