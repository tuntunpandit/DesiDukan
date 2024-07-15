import { Component, OnInit, inject, signal } from '@angular/core';
import { AdminService } from '../../admin.service';
import { Product } from '../../../../models/product';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MessageType } from '../../../../utility/toastr.enum';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  adminService = inject(AdminService);
  products = signal<Product[]>([]);
  router = inject(Router);
  toastr = inject(ToastrService);
  isLoading = false;

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.isLoading = true;
    this.adminService.getProducts().subscribe({
      next: (res: any) => {
        this.products.set(res?.products);
        this.isLoading = false;
      },
      error: (err: any) => {
        this.toastr.error(err, MessageType.ERROR);
        this.isLoading = false;
      },
    });
  }

  openAddProductPage() {
    this.router.navigate(['/admin/products/add']);
  }
}
