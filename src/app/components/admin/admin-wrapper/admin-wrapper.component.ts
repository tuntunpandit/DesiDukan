import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-wrapper',
  standalone: true,
  imports: [AdminHeaderComponent, RouterModule],
  templateUrl: './admin-wrapper.component.html',
  styleUrl: './admin-wrapper.component.scss',
})
export class AdminWrapperComponent {}
