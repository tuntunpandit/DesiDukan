import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../authentication/auth.service';
import { CustomerService } from '../../customer.service';
import { Observable } from 'rxjs';
import { Product } from '../../../../models/product';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-c-header',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './c-header.component.html',
  styleUrl: './c-header.component.scss',
})
export class CHeaderComponent implements OnInit {
  isUserPopup: boolean = false;
  authService = inject(AuthService);
  products$!: Observable<Product[]>;
  customerService = inject(CustomerService);

  constructor() {}
  ngOnInit(): void {
    this.products$ = this.customerService.cartItems$;
    console.log(
      'this.products',
      this.customerService.cartItemsSubject.getValue()
    );
  }

  openUserPopup() {
    this.isUserPopup = !this.isUserPopup;
  }

  closeUserPopup() {
    this.isUserPopup = false;
  }

  logout() {
    this.authService.logout();
  }
}
