import { Component, OnInit, inject, signal } from '@angular/core';
import { AdminService } from '../admin.service';
import { StatOrder } from '../../../models/stats';
import { RecentOrderComponent } from '../recent-order/recent-order.component';
import { StatisticCardComponent } from '../statistic-card/statistic-card.component';
import { ToastrService } from 'ngx-toastr';
import { MessageType } from '../../../utility/toastr.enum';
import { Order, OrderItem } from '../../../models/order';
import { TopSellingProductsComponent } from '../top-selling-products/top-selling-products.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    RecentOrderComponent,
    StatisticCardComponent,
    TopSellingProductsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class AdminDashboardComponent implements OnInit {
  adminService = inject(AdminService);
  toastr = inject(ToastrService);
  overAllSalesData = signal<StatOrder>({
    minimumSale: 0,
    totalSales: 0,
    maxSale: 0,
    avgSale: 0,
  });
  currentDaySaleData = signal<any[]>([]);
  orders = signal<Order[]>([]);
  isStatsLoading = signal<boolean>(false);
  isOrderLoading = signal<boolean>(false);
  topSellingProducts = signal<OrderItem[]>([]);

  ngOnInit(): void {
    this.getStats();
    this.getAllOrders();
  }

  getStats() {
    this.isStatsLoading.set(true);
    this.adminService.getSellStats().subscribe({
      next: (res: any) => {
        this.overAllSalesData.set(res?.orders[0]);
        this.currentDaySaleData.set(res?.saleToday[0]);
        console.log('stats', this.overAllSalesData());
        this.isStatsLoading.set(false);
      },
      error: (err: any) => {
        this.toastr.error(err, MessageType.ERROR);
        this.isStatsLoading.set(false);
      },
    });
  }

  getAllOrders() {
    this.isOrderLoading.set(true);
    this.adminService.getOrders().subscribe({
      next: (res: any) => {
        this.orders.set(res?.orders);
        if (this.orders && this.orders().length > 0) {
          this.topSellingProducts.set(
            this.findTopSellingProducts(this.orders())
          );
          console.log('this.topSellingProducts', this.topSellingProducts());
        }
        this.isOrderLoading.set(false);
      },
      error: (err: any) => {
        this.toastr.error(err, MessageType.ERROR);
        this.isOrderLoading.set(false);
      },
    });
  }

  findTopSellingProducts(orders: Order[]) {
    let products: OrderItem[] = [];
    orders.map((order: Order) => {
      const { orderItems } = order;
      if (orderItems && orderItems.length > 0) {
        orderItems.forEach((item: OrderItem) => {
          const indexOfAlreadyPresentProduct =
            this.checkIfProductAlreadyPresent(item, products);
          if (indexOfAlreadyPresentProduct === -1) {
            products.push(item);
          } else {
            products.map((product: OrderItem, index) => {
              index === indexOfAlreadyPresentProduct
                ? {
                    ...product,
                    noOfTimeBought: product.noOfTimeBought
                      ? product.noOfTimeBought + 1
                      : 1,
                  }
                : product;
            });
          }
        });
      }
    });
    return products;
  }

  checkIfProductAlreadyPresent(item: OrderItem, products: OrderItem[] = []) {
    const index = products.findIndex(
      (product: OrderItem) => product._id === item._id
    );
    return index;
  }
}
