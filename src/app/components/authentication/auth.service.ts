import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginData, LoginFormData } from './auth.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  isUserLoggedin(): boolean {
    // const jwtToken = localStorage.getItem('token');
    const jwtToken = '';
    return jwtToken ? true : false;
  }

  login(userData: LoginFormData): Observable<LoginData> {
    return this.http.post<LoginData>(`${this.apiUrl}/auth/local`, userData);
  }

  register(userData: any) {
    return this.http.post(`${this.apiUrl}/auth/local/register`, userData);
  }
}
