import { Component, inject } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { AuthService } from '../../../authentication/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isUserPopup: boolean = false;
  authService = inject(AuthService);

  openUserPopup() {
    this.isUserPopup = !this.isUserPopup;
  }

  logout() {
    this.authService.logout();
  }
}
