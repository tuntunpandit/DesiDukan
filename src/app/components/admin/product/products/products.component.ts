import { Component, OnInit, inject, signal } from '@angular/core';
import { AdminService } from '../../admin.service';
import { Product } from '../../../../models/product';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  adminService = inject(AdminService);
  products = signal<Product[]>([]);

  ngOnInit(): void {
    this.getAllProducts();
  }

  async getAllProducts() {
    try {
      const products = await this.adminService.getProducts();
      this.products.set(products);
    } catch (err: any) {
      console.error(err);
    }
  }
}
