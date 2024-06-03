import { Component, Input } from '@angular/core';
import { CurrencyPipe, SlicePipe } from '@angular/common';
import { Product } from '../../../../models/product';

@Component({
  selector: 'app-default-product',
  standalone: true,
  imports: [SlicePipe, CurrencyPipe],
  templateUrl: './default-product.component.html',
  styleUrl: './default-product.component.scss',
})
export class DefaultProductComponent {
  @Input() products!: Array<Product>;
}
