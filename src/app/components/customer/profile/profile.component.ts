import { Component, OnInit, inject } from '@angular/core';
import { CustomerService } from '../customer.service';
import { User } from '../../authentication/auth.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  user!: User;
  customerService = inject(CustomerService);
  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.customerService.getUserData().subscribe({
      next: (res: any) => {
        this.user = res.user;
        console.log('user data', this.user);
      },
      error: (err: any) => {
        console.error(err.message);
      },
    });
  }
}
