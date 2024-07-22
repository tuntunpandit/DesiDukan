import { Component } from '@angular/core';
import { CProductsComponent } from '../products/c-products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
