import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, RouterLink } from '@angular/router';
import { RegisterFormData } from '../auth.model';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  registerForm!: FormGroup;
  authService = inject(AuthService);
  fb = inject(FormBuilder);
  router = inject(Router);
  isLoading: boolean = false;

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      fullname: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.isLoading = true;
    const { fullname, email, password } = this.registerForm.value;
    const registrationData: RegisterFormData = {
      fullname,
      email,
      password,
    };

    this.authService.register(registrationData).subscribe({
      next: (res: any) => {
        console.log('Data', res);
        if (res.data) {
          this.isLoading = false;
          this.router.navigate(['/login']);
        }
      },
      error: (err: any) => {
        this.isLoading = false;
        console.error(err.message);
      },
    });
  }
}
