import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environment';
import { Product } from '../../models/product';
import { Order, Stat } from '../../models/stats';
import { firstValueFrom, Observable } from 'rxjs';
import { Category } from '../../models/category';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  apiUrl: string = environment.apiUrl;
  http = inject(HttpClient);

  constructor() {}

  getProducts() {
    return this.http.get(`${this.apiUrl}/products`);
  }

  addProduct(product: FormData) {
    return this.http.post(`${this.apiUrl}/products`, product);
  }

  /**
   * get product category lists
   * @returns List of Category
   */

  getProductCategories() {
    return this.http.get(`${this.apiUrl}/categories`);
  }

  createCategory(name: string) {
    return this.http.post(`${this.apiUrl}/ecommerce/categories`, { name });
  }
}
