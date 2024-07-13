import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, RouterLink } from '@angular/router';
import { Role } from '../../../utility/role.enum';
import { ToastrService } from 'ngx-toastr';
import { MessageType } from '../../../utility/toastr.enum';

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
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.isLoading = true;
    const { username, password } = this.loginForm.value;
    const loginData = { username, password };
    this.authService.login(loginData).subscribe({
      next: (res: any) => {
        console.log('data', res?.data);
        if (res && res.data) {
          const user = res?.data?.user;
          this.isLoading = false;
          this.authService.setTokenInLocal(res.data.accessToken);
          this.authService.setUserDataInLocal(user);
          console.log('uss', user.role === Role.ADMIN);
          if (user.role === Role.ADMIN) {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/']);
          }
          this.toastr.success(`Welcome ${user.username}`, MessageType.SUCCESS);
        } else {
          this.toastr.error(
            'Something went wrong!, Please try again',
            MessageType.ERROR
          );
          return;
        }
      },
      error: (err: any) => {
        this.isLoading = false;
        this.toastr.error(err.error.message, MessageType.ERROR);
      },
    });
  }
}
