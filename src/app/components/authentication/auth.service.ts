import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginData, LoginFormData, RegisterFormData } from './auth.model';
import { Observable, catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  generateId() {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 30; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters[randomIndex];
    }
    return id;
  }

  isUserLoggedin(): boolean {
    const jwtToken = localStorage.getItem('token');
    return jwtToken ? true : false;
  }

  login(userData: LoginFormData): Observable<LoginData> {
    return this.http.post<any>('/api/amazon/Login', userData).pipe(
      map((response: any) => {
        if (response && response.result === false) {
          throw new Error(response.message || 'Unknown error occurred');
        }
        return response as LoginData;
      })
    );
  }

  register(userData: RegisterFormData) {
    return this.http.post(`/api/amazon/RegisterCustomer`, userData);
  }
}
