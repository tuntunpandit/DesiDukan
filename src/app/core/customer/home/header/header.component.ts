import { Component, inject } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../common/authentication/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isUserPopup: boolean = false;
  authService = inject(AuthService);
  userService = inject(AuthService);
  isUserAdmin = false;
  constructor() {
    this.isUserAdmin = this.userService.getUserInfo()?.isAdmin;
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
}
