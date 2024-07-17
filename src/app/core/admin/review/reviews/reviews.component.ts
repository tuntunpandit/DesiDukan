import { Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Color } from '../../../../models/color';
import { MessageType } from '../../../../utility/toastr.enum';
import { AdminService } from '../../admin.service';
import { AddCategoryComponent } from '../../category/add-category/add-category.component';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
})
export class ReviewsComponent {
  adminService = inject(AdminService);
  reviews = signal<any[]>([]);
  readonly dialog = inject(MatDialog);
  toastr = inject(ToastrService);
  isLoading = false;
  ngOnInit(): void {
    this.getReviews();
  }

  getReviews() {
    this.isLoading = true;
    this.adminService.getReviews().subscribe({
      next: (res: any) => {
        this.reviews.set(res?.reviews);
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
        this.getReviews();
      }
    });
  }
}
