import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../common/authentication/auth.service';

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
  @Input() sidebar!: any;
  openUserPopup() {
    this.isAdminPopup = !this.isAdminPopup;
  }

  logout() {
    this.authService.logout();
  }
}
