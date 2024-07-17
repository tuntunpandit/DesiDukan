import { Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MessageType } from '../../../../utility/toastr.enum';
import { AdminService } from '../../admin.service';
import { AddCategoryComponent } from '../../category/add-category/add-category.component';
import { Brand } from '../../../../models/brand';
import { DatePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [TitleCasePipe, DatePipe],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss',
})
export class BrandsComponent {
  adminService = inject(AdminService);
  brands = signal<Brand[]>([]);
  readonly dialog = inject(MatDialog);
  toastr = inject(ToastrService);
  isLoading = false;
  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.isLoading = true;
    this.adminService.getBrands().subscribe({
      next: (res: any) => {
        this.brands.set(res?.brands);
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
        this.getBrands();
      }
    });
  }
}
