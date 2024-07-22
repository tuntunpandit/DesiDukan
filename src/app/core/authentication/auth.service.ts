import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginData, LoginFormData, RegisterFormData } from './auth.model';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = environment.apiUrl;
  constructor(private http: HttpClient, private router: Router) {}

  isUserLoggedin(): boolean {
    const jwtToken = localStorage.getItem('token');
    return jwtToken ? true : false;
  }

  getJwtToken() {
    const token = localStorage.getItem('token');
    return token ? token : '';
  }

  getRefreshToken() {
    const token = localStorage.getItem('refresh-token');
    return token ? token : '';
  }

  refreshToken() {
    console.log('refresh api getting called');
    return this.http.post(`${this.baseUrl}/users/refresh-token`, null);
  }

  getUserInfo() {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  login(userData: LoginFormData) {
    return this.http.post<LoginFormData>(
      `${this.baseUrl}/users/login`,
      userData
    );
  }

  register(userData: any) {
    return this.http.post<any>(`${this.baseUrl}/users/register`, userData);
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  setTokenInLocal(token: string) {
    localStorage.setItem('token', token);
  }

  setUserDataInLocal(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }
}
