import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../../models/product';
import { CustomerService } from '../../customer.service';
import { CurrencyPipe, NgStyle } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe, NgStyle],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  customerService = inject(CustomerService);
  productId!: string | null;
  product!: Product;

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.productId) {
      this.customerService.getProduct(this.productId).subscribe({
        next: (res: any) => {
          if (res && res.product) {
            this.product = res.product;
          }
        },
        error: (err: any) => {
          console.log(err.message);
        },
      });
    }
  }

  addToCart(product: Product) {}

  gotoCheckoutPage() {}
}
