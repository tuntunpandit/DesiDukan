import { Component, Input, inject, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../authentication/auth.service';

@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.scss',
})
export class AdminHeaderComponent {
  isUserPopup: boolean = false;
  authService = inject(AuthService);
  isUserAdmin = false;
  isMobileScreen = input.required<boolean>();
  onHamburgerClick = output<boolean>();
  showSidebar = false;
  constructor() {
    this.isUserAdmin = this.authService.getUserInfo()?.isAdmin;
  }

  openUserPopup() {
    this.isUserPopup = !this.isUserPopup;
  }

  closeUserPopup() {
    this.isUserPopup = false;
  }

  logout() {
    this.authService.logout();
  }

  openAdminSidebar() {
    this.showSidebar = !this.showSidebar;
    this.onHamburgerClick.emit(this.showSidebar);
  }
}
