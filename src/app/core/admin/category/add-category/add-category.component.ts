import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AdminService } from '../../admin.service';
import { ToastrService } from 'ngx-toastr';
import { MessageType } from '../../../../utility/toastr.enum';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss',
})
export class AddCategoryComponent implements OnInit {
  categoryForm!: FormGroup;
  fb = inject(FormBuilder);
  adminService = inject(AdminService);
  toastr = inject(ToastrService);
  dialogRef = inject(MatDialogRef<AddCategoryComponent>);
  isLoading: boolean = false;

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.categoryForm.invalid) {
      return;
    }
    const { name } = this.categoryForm.value;
    this.isLoading = true;
    this.adminService.createCategory(name).subscribe({
      next: (result: any) => {
        this.dialogRef.close(result);
        this.isLoading = false;
      },
      error: (err: any) => {
        this.isLoading = false;
        this.dialogRef.close();
        this.toastr.error(err, MessageType.ERROR);
      },
    });
  }

  onClose() {
    this.categoryForm.reset();
  }
}
