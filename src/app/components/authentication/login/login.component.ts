import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoginData, LoginFormData } from '../auth.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  authService = inject(AuthService);
  fb = inject(FormBuilder);
  router = inject(Router);
  isLoading: boolean = false;

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      UserName: ['', [Validators.required]],
      UserPassword: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.login(this.loginForm.value).subscribe({
      next: (data: LoginData) => {
        if (data && data.data) {
          const jwt = this.authService.generateId();
          localStorage.setItem('token', jwt);
          localStorage.setItem('userInfo', JSON.stringify(data.data));
          this.isLoading = false;
          this.router.navigate(['/']);
        }
      },
      error: (err: any) => {
        this.isLoading = false;
        console.error(err.message);
      },
    });
  }
}
