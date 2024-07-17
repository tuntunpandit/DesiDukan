import { Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MessageType } from '../../../../utility/toastr.enum';
import { AdminService } from '../../admin.service';
import { AddCategoryComponent } from '../../category/add-category/add-category.component';
import { Color } from '../../../../models/color';
import { DatePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-colors',
  standalone: true,
  imports: [TitleCasePipe, DatePipe],
  templateUrl: './colors.component.html',
  styleUrl: './colors.component.scss',
})
export class ColorsComponent {
  adminService = inject(AdminService);
  colors = signal<Color[]>([]);
  readonly dialog = inject(MatDialog);
  toastr = inject(ToastrService);
  isLoading = false;
  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.isLoading = true;
    this.adminService.getColors().subscribe({
      next: (res: any) => {
        this.colors.set(res?.colors);
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
        this.getColors();
      }
    });
  }
}
