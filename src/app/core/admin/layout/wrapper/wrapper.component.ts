import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminSidebarComponent } from '../sidebar/admin-sidebar.component';
import { AuthService } from '../../../authentication/auth.service';
import { AdminHeaderComponent } from '../header/admin-header.component';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    AdminSidebarComponent,
    AdminHeaderComponent,
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
