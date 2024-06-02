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

  getUserInfo() {
    const user = localStorage.getItem('userInfo');
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  login(userData: LoginFormData): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users/login`, userData);
  }

  register(userData: RegisterFormData) {
    return this.http.post(`${this.baseUrl}/users/register`, userData);
  }

  logout() {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
