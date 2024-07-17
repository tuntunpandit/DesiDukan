import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  apiUrl: string = environment.apiUrl;
  http = inject(HttpClient);

  constructor() {}
  // product
  getProducts() {
    return this.http.get(`${this.apiUrl}/products`);
  }

  addProduct(product: FormData) {
    return this.http.post(`${this.apiUrl}/products`, product);
  }

  // Category
  getProductCategories() {
    return this.http.get(`${this.apiUrl}/categories`);
  }

  createCategory(name: string) {
    return this.http.post(`${this.apiUrl}/ecommerce/categories`, { name });
  }

  // coupon
  getCoupons() {
    return this.http.get(`${this.apiUrl}/coupons`);
  }

  // color
  getColors() {
    return this.http.get(`${this.apiUrl}/colors`);
  }

  // review
  getReviews() {
    return this.http.get(`${this.apiUrl}/reviews`);
  }

  // brand
  getBrands() {
    return this.http.get(`${this.apiUrl}/brands`);
  }

  // brand
  getOrders() {
    return this.http.get(`${this.apiUrl}/orders`);
  }

  // sell stats of order - admin
  getSellStats() {
    return this.http.get(`${this.apiUrl}/orders/sales/stats`);
  }
}
