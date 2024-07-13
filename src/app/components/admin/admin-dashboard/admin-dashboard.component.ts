import { Component, OnInit, inject, signal } from '@angular/core';
import { AdminService } from '../admin.service';
import { Order, Stat } from '../../../models/stats';
import { RecentOrderComponent } from './recent-order/recent-order.component';
import { StatisticCardComponent } from './statistic-card/statistic-card.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RecentOrderComponent, StatisticCardComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
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

  ngOnInit(): void {
    this.getStats();
    this.getRecentOrders();
  }

  async getStats() {
    try {
      const data = await this.adminService.getStats();
      console.log('ddd', data);
      // const formattedData = this.prepareData(data);
      this.stats.set(data);
    } catch (err: any) {
      console.error(err.message);
    }
  }

  async getRecentOrders() {
    try {
      const data = await this.adminService.getOrders();
      this.recentOrders.set(data);
    } catch (err: any) {}
  }
  prepareData(data: Stat) {}
}
