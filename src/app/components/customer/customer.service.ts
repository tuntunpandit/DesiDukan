import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getCustomers() {
    // return this.http.get(`${this.apiUrl}/customers`);
  }

  getUserData() {
    return this.http.get(`${this.apiUrl}/users/profile`);
  }
}
