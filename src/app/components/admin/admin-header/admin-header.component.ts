import { Component, inject } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.scss',
})
export class AdminHeaderComponent {
  isAdminPopup: boolean = false;
  authService = inject(AuthService);

  openUserPopup() {
    this.isAdminPopup = !this.isAdminPopup;
  }

  logout() {
    this.authService.logout();
  }
}
