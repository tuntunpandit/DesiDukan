import { Component, inject } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../common/authentication/auth.service';
import { Role } from '../../../../utility/role.enum';

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
  ADMIN = Role.ADMIN;
  USER = Role.USER;
  userRole!: string;
  userService = inject(AuthService);

  constructor() {
    const user = this.userService.getUserInfo();
    this.userRole = user?.role;
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
