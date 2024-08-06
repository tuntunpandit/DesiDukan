import { Component, inject, OnInit, signal } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Observable } from 'rxjs';
import { Product } from '../../../models/product';
import { AsyncPipe } from '@angular/common';
import { CartProductsComponent } from './cart-products/cart-products.component';
import { CartTotalComponent } from './cart-total/cart-total.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [AsyncPipe, CartProductsComponent, CartTotalComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  products$!: Observable<Product[]>;
  customerService = inject(CustomerService);
  ngOnInit(): void {
    this.products$ = this.customerService.cartItems$;
    console.log(
      'this.products',
      this.customerService.cartItemsSubject.getValue()
    );
  }
}
