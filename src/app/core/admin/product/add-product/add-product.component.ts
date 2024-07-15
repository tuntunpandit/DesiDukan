import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { Category } from '../../../../models/category';
import { AdminService } from '../../admin.service';
import { MessageType } from '../../../../utility/toastr.enum';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploadComponent } from '../../../../shared/components/file-upload/file-upload.component';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [MatDialogModule, ReactiveFormsModule, FileUploadComponent],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup;
  fb = inject(FormBuilder);
  categories = signal<Category[]>([]);
  adminService = inject(AdminService);
  toastr = inject(ToastrService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.initializeForm();
    this.getCategories();
  }

  initializeForm() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
      price: ['', [Validators.required, Validators.min(0)]],
      stock: ['', [Validators.required, Validators.min(1)]],
      category: ['', Validators.required],
      mainImage: ['', Validators.required],
      subImages: [new FormControl([], Validators.maxLength(4))],
    });
  }

  getCategories() {
    this.adminService.getProductCategories().subscribe({
      next: (res: any) => {
        console.log(res);
        this.categories.set(res?.data?.categories);
      },
      error: (err: any) => {
        this.toastr.error(err, MessageType.ERROR);
      },
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const formData = new FormData();
      formData.append('name', this.productForm.get('name')?.value || '');
      formData.append(
        'description',
        this.productForm.get('description')?.value || ''
      );
      formData.append('price', this.productForm.get('price')?.value || '');
      formData.append('stock', this.productForm.get('stock')?.value || '');
      formData.append(
        'category',
        this.productForm.get('category')?.value || ''
      );
      formData.append(
        'mainImage',
        this.productForm.get('mainImage')?.value || ''
      );

      const subImages = this.productForm.get('subImages')?.value || [];
      subImages.forEach((file: File, index: number) => {
        formData.append(`subImages`, file);
      });
      this.adminService.addProduct(formData).subscribe({
        next: (res: any) => {
          console.log(res);
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    }
  }
  onSubmit1() {
    if (this.productForm.invalid) {
      return;
    }
    const { name, description, price, stock, category, mainImage, subImages } =
      this.productForm.value;
    const formData = new FormData();
    console.log(mainImage);
    console.log(subImages);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('stock', stock);
    formData.append('category', category);
    formData.append('mainImage', mainImage);
    formData.append('subImages', subImages);

    // if (subImages && subImages.length > 0) {
    //   for (const file of subImages) {
    //     formData.append('subImages', file, file.name);
    //   }
    // }

    console.log(formData);
    this.adminService.addProduct(formData).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  setSelectedFileToForm(event: any, field: string) {
    const files = event.target.files;
    if (field === 'mainImage') {
      this.productForm.patchValue({
        mainImage: files[0],
      });
    } else if (field === 'subImages') {
      const fileArray = Array.from(files).slice(0, 4); // Limit to 4 files
      this.productForm.patchValue({
        subImages: fileArray,
      });
    }
    console.log(this.productForm.value);
  }
}
