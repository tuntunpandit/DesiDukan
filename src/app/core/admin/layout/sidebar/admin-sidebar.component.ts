import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.scss',
})
export class AdminSidebarComponent {
  showCustomSidebar = input.required<boolean>();
  isMobileScreen = input.required<boolean>();

  get() {
    return this.isMobileScreen;
  }

  set(mobileS: boolean) {
    console.log('sdad');
    if (mobileS) {
      const sidebarEl = document.getElementsByClassName('custom-sidebar');
      sidebarEl[0].classList.remove('custom-sidebar');
    }
  }
}
