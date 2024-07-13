import { Component, Input } from '@angular/core';
import { Category } from '../../../../models/category';
import { SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [SlicePipe, RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  @Input() categories!: Array<Category>;
}
