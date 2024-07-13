import { Component, inject } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { AuthService } from '../../../authentication/auth.service';
import { RouterLink } from '@angular/router';

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
