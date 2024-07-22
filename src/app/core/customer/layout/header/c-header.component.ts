import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../authentication/auth.service';

@Component({
  selector: 'app-c-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './c-header.component.html',
  styleUrl: './c-header.component.scss',
})
export class CHeaderComponent {
  isUserPopup: boolean = false;
  authService = inject(AuthService);
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
