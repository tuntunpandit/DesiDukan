import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal } from '@angular/core';
import { environment } from '../../../environment';
import { Product } from '../../models/product';
import { BehaviorSubject, Observable } from 'rxjs';

export type CartSignal = WritableSignal<Product[]>;
@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl: string = environment.apiUrl;

  cartItemsSubject = new BehaviorSubject<Product[]>([]);
  cartItems$: Observable<Product[]> = this.cartItemsSubject.asObservable();

  wishlistItemsSubject = new BehaviorSubject<Product[]>([]);
  wishlistItems$: Observable<Product[]> =
    this.wishlistItemsSubject.asObservable();

  addProductToCart(product: Product) {
    const currentProducts = this.cartItemsSubject.getValue();
    this.cartItemsSubject.next([...currentProducts, product]);
    localStorage.setItem(
      'products',
      JSON.stringify([...currentProducts, product])
    );
  }

  addProductToWishlist(product: Product) {
    const currentProducts = this.wishlistItemsSubject.getValue();
    this.wishlistItemsSubject.next([...currentProducts, product]);
    localStorage.setItem(
      'wishlist',
      JSON.stringify([...currentProducts, product])
    );
  }

  constructor(private http: HttpClient) {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      const parsedProducts: Product[] = JSON.parse(storedProducts);
      this.cartItemsSubject.next(parsedProducts);
    }
    const storedWishlists = localStorage.getItem('wishlist');
    if (storedWishlists) {
      const parsedProducts: Product[] = JSON.parse(storedWishlists);
      this.wishlistItemsSubject.next(parsedProducts);
    }
  }

  getCustomers() {
    // return this.http.get(`${this.apiUrl}/customers`);
  }

  getUserData() {
    return this.http.get(`${this.apiUrl}/users/profile`);
  }

  getProductCategories() {
    return this.http.get(`${this.apiUrl}/categories`);
  }

  getProducts() {
    return this.http.get(`${this.apiUrl}/products`);
  }

  getProduct(id: string) {
    return this.http.get(`${this.apiUrl}/products/${id}`);
  }
}
