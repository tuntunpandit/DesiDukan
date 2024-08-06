import { Component, inject, OnInit, signal } from '@angular/core';
import { AdminService } from '../../admin/admin.service';
import { Product } from '../../../models/product';
import { CustomerService } from '../customer.service';
import { ToastrService } from 'ngx-toastr';
import { MessageType } from '../../../utility/toastr.enum';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-c-products',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './c-products.component.html',
  styleUrl: './c-products.component.scss',
})
export class CProductsComponent implements OnInit {
  adminService = inject(AdminService);
  products = signal<Product[]>([]);
  customerService = inject(CustomerService);
  toastr = inject(ToastrService);

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.adminService.getProducts().subscribe({
      next: (res: any) => {
        this.products.set(res?.products);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  addToCart(product: Product) {
    this.customerService.addProductToCart(product);
    this.toastr.success(`${product.name} added to cart!`, MessageType.SUCCESS);
  }

  addToWishlist(event: Event, product: Product) {
    event.stopPropagation();
    this.customerService.addProductToWishlist(product);
    this.toastr.success(
      `${product.name} added to wishlist!`,
      MessageType.SUCCESS
    );
  }
}
