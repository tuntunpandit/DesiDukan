import { Component, inject, signal } from '@angular/core';
import { AdminService } from '../../admin.service';
import { Category } from '../../../../models/category';
import { RouterLink } from '@angular/router';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MessageType } from '../../../../utility/toastr.enum';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterLink, MatDialogModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  adminService = inject(AdminService);
  categories = signal<Category[]>([]);
  readonly dialog = inject(MatDialog);
  toastr = inject(ToastrService);
  isLoading = false;
  ngOnInit(): void {
    this.getProductCategories();
  }

  getProductCategories() {
    this.isLoading = true;
    this.adminService.getProductCategories().subscribe({
      next: (res: any) => {
        this.categories.set(res?.categories);
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
        this.getProductCategories();
      }
    });
  }
}
