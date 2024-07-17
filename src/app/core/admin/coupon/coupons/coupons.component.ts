import { Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MessageType } from '../../../../utility/toastr.enum';
import { AdminService } from '../../admin.service';
import { AddCategoryComponent } from '../../category/add-category/add-category.component';
import { DatePipe, NgClass, TitleCasePipe } from '@angular/common';
import { Coupon } from '../../../../models/coupon';

@Component({
  selector: 'app-coupons',
  standalone: true,
  imports: [TitleCasePipe, DatePipe, NgClass],
  templateUrl: './coupons.component.html',
  styleUrl: './coupons.component.scss',
})
export class CouponsComponent {
  adminService = inject(AdminService);
  coupons = signal<Coupon[]>([]);
  readonly dialog = inject(MatDialog);
  toastr = inject(ToastrService);
  isLoading = false;
  ngOnInit(): void {
    this.getCoupons();
  }

  getCoupons() {
    this.isLoading = true;
    this.adminService.getCoupons().subscribe({
      next: (res: any) => {
        this.coupons.set(res?.coupons);
        this.isLoading = false;
      },
      error: (err: any) => {
        this.toastr.error(err, MessageType.ERROR);
        this.isLoading = false;
      },
    });
  }

  openCategoryModal() {
    const dialogRef = this.dialog.open(AddCategoryComponent, {
      minWidth: '400px',
      maxWidth: '900px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((res: any) => {
      if (res) {
        this.getCoupons();
      }
    });
  }
}
