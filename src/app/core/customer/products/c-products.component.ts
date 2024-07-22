import { Component, inject, OnInit, signal } from '@angular/core';
import { AdminService } from '../../admin/admin.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-c-products',
  standalone: true,
  imports: [],
  templateUrl: './c-products.component.html',
  styleUrl: './c-products.component.scss',
})
export class CProductsComponent implements OnInit {
  adminService = inject(AdminService);

  products = signal<Product[]>([]);

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
}
