import { Component, inject, signal } from '@angular/core';
import { MessageType } from '../../../../utility/toastr.enum';
import { AdminService } from '../../admin.service';
import { ToastrService } from 'ngx-toastr';
import { Order } from '../../../../models/order';
import {
  CurrencyPipe,
  DatePipe,
  NgClass,
  TitleCasePipe,
} from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [TitleCasePipe, DatePipe, CurrencyPipe, NgClass, RouterLink],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent {
  adminService = inject(AdminService);
  orders = signal<Order[]>([]);
  toastr = inject(ToastrService);
  isLoading = false;
  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.isLoading = true;
    this.adminService.getOrders().subscribe({
      next: (res: any) => {
        this.orders.set(res?.orders);
        this.isLoading = false;
      },
      error: (err: any) => {
        this.toastr.error(err, MessageType.ERROR);
        this.isLoading = false;
      },
    });
  }
}
