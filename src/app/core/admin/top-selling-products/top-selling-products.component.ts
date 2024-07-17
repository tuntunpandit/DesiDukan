import { Component, input } from '@angular/core';
import { OrderItem } from '../../../models/order';
import { CurrencyPipe, SlicePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-top-selling-products',
  standalone: true,
  imports: [TitleCasePipe, CurrencyPipe, SlicePipe],
  templateUrl: './top-selling-products.component.html',
  styleUrl: './top-selling-products.component.scss',
})
export class TopSellingProductsComponent {
  products = input.required<OrderItem[]>();
  isLoading = input.required<boolean>();
}
