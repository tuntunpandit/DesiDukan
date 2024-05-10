import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { CompanyComponent } from './company/company.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { DefaultProductComponent } from './default-product/default-product.component';
import { CustomerReviewComponent } from './customer-review/customer-review.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    CompanyComponent,
    NewsletterComponent,
    DefaultProductComponent,
    CustomerReviewComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
