import { Component, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss',
})
export class FileUploadComponent {
  multiple = input.required<boolean>();
  @Output() fileSelected = new EventEmitter<File>();
  onFileUpload(event: any) {
    this.fileSelected.emit(event);
  }
}
