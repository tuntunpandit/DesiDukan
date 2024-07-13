import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../home/header/header.component';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss',
})
export class WrapperComponent {}
