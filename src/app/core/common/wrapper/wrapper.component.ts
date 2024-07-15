import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../customer/home/header/header.component';
import { AdminHeaderComponent } from '../../admin/layout/header/admin-header.component';
import { AdminSidebarComponent } from '../../admin/layout/sidebar/admin-sidebar.component';
import { Role } from '../../../utility/role.enum';
import { AuthService } from '../authentication/auth.service';
@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
  ],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss',
})
export class WrapperComponent {
  isUserAdmin = false;
  userService = inject(AuthService);
  constructor() {
    this.isUserAdmin = this.userService.getUserInfo()?.isAdmin;
  }
}