import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnInit } from '@angular/core';
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
export class WrapperComponent implements OnInit {
  isUserAdmin = false;
  userService = inject(AuthService);
  isMobileScreen = true;
  showCustomSidebar = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobileScreen = this.checkScreen(event.target.innerWidth);
    // this.showCustomSidebar = event.target.innerWidth < 760 ? true : false;
  }
  constructor() {
    this.isUserAdmin = this.userService.getUserInfo()?.isAdmin;
  }

  ngOnInit(): void {
    this.isMobileScreen = this.checkScreen(window.innerWidth);
  }

  checkScreen(size: number) {
    return size < 760 ? true : false;
  }
  toggleAdminSidebar(event: boolean) {
    this.showCustomSidebar = event;
  }
}
