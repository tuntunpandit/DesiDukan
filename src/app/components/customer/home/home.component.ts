import { Component, OnInit, inject } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { CompanyComponent } from './company/company.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { DefaultProductComponent } from './default-product/default-product.component';
import { CustomerReviewComponent } from './customer-review/customer-review.component';
import { CategoryComponent } from './category/category.component';
import { CustomerService } from '../customer.service';
import { Category } from '../../../models/category';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    CompanyComponent,
    NewsletterComponent,
    DefaultProductComponent,
    CustomerReviewComponent,
    CategoryComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  categories!: Category[];
  products!: Product[];
  customerService = inject(CustomerService);
  ngOnInit(): void {
    this.getAllCategories();
    this.getAllProducts();
  }

  getAllCategories() {
    this.customerService.getProductCategories().subscribe({
      next: (res: any) => {
        this.categories = res.categories;
      },
      error: (err: any) => {
        console.error(err.message);
      },
    });
  }

  getAllProducts() {
    this.customerService.getProducts().subscribe({
      next: (res: any) => {
        this.products = res.products;
      },
      error: (err: any) => {
        console.error(err.message);
      },
    });
  }
}
