import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CHeaderComponent } from '../header/c-header.component';
import { CFooterComponent } from '../footer/c-footer.component';

@Component({
  selector: 'app-c-wrapper',
  standalone: true,
  imports: [CHeaderComponent, RouterOutlet, CFooterComponent],
  templateUrl: './c-wrapper.component.html',
  styleUrl: './c-wrapper.component.scss',
})
export class CWrapperComponent {}
