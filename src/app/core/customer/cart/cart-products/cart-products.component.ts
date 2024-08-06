import { Component, input } from '@angular/core';
import { Product } from '../../../../models/product';

@Component({
  selector: 'app-cart-products',
  standalone: true,
  imports: [],
  templateUrl: './cart-products.component.html',
  styleUrl: './cart-products.component.scss',
})
export class CartProductsComponent {
  product = input.required<Product>();
}
