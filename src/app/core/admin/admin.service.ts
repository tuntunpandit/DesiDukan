import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environment';
import { Product } from '../../models/product';
import { Order, Stat } from '../../models/stats';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  apiUrl: string = environment.apiUrl;
  http = inject(HttpClient);

  constructor() {}

  async getStats(): Promise<any> {
    const result = await fetch(`${this.apiUrl}/orders/sales/stats`, {
      method: 'GET',
    });
    const stats = await result.json();
    return stats;
  }

  async getOrders(): Promise<Order[]> {
    const result = await fetch(`${this.apiUrl}/orders`, {
      method: 'GET',
    });
    const data = await result.json();
    return data.orders;
  }

  async getProducts(): Promise<Product[]> {
    const result = await fetch(`${this.apiUrl}/products`, {
      method: 'GET',
    });
    const data = await result.json();
    return data.products;
  }

  async addProduct(product: Partial<Product>): Promise<any> {
    const result = await fetch(`${this.apiUrl}/products`, {
      method: 'POST',
      body: JSON.stringify(product),
    });
    const data = await result.json();
    return data;
  }
}
