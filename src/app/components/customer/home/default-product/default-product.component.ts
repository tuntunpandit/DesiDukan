import { Component, Input } from '@angular/core';
import { Product } from '../../../../models/Product';
import { CurrencyPipe, SlicePipe } from '@angular/common';

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
