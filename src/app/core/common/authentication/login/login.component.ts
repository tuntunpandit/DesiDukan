import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MessageType } from '../../../../utility/toastr.enum';

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
  toastr = inject(ToastrService);

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.isLoading = true;
    const { email, password } = this.loginForm.value;
    const loginData = { email, password };
    this.authService.login(loginData).subscribe({
      next: (res: any) => {
        console.log('data', res?.data);
        if (res) {
          const token = res?.token;
          const user = res?.userFound;
          this.authService.setTokenInLocal(token);
          this.authService.setUserDataInLocal(user);
          if (user.isAdmin) {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/']);
          }
          this.toastr.success(`Welcome ${user.fullname}`, MessageType.SUCCESS);
        } else {
          this.toastr.error(
            'Something went wrong!, Please try again',
            MessageType.ERROR
          );
          return;
        }
        this.isLoading = false;
      },
      error: (err: any) => {
        this.isLoading = false;
        this.toastr.error(err.error.message, MessageType.ERROR);
      },
    });
  }
}
