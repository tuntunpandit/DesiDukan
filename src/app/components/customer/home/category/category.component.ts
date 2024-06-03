import { Component, Input } from '@angular/core';
import { Category } from '../../../../models/category';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  @Input() categories!: Array<Category>;
}
