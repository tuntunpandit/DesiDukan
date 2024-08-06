import { Component, input } from '@angular/core';
import { Product } from '../../../../models/product';

@Component({
  selector: 'app-cart-total',
  standalone: true,
  imports: [],
  templateUrl: './cart-total.component.html',
  styleUrl: './cart-total.component.scss',
})
export class CartTotalComponent {
  products = input.required<Product[]>();

  constructor() {
    this.prepareCartTotalData();
  }

  prepareCartTotalData() {}
}
