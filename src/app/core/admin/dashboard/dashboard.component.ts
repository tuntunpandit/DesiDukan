import { Component, OnInit, inject, signal } from '@angular/core';
import { AdminService } from '../admin.service';
import { Order, Stat } from '../../../models/stats';
import { RecentOrderComponent } from '../recent-order/recent-order.component';
import { StatisticCardComponent } from '../statistic-card/statistic-card.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RecentOrderComponent, StatisticCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class AdminDashboardComponent implements OnInit {
  adminService = inject(AdminService);
  recentOrders = signal<Order[]>([]);
  stats = signal<Stat>({
    success: false,
    message: '',
    orders: [],
    saleToday: [],
  });
  constructor() {}

  ngOnInit(): void {}
}
