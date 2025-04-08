import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fiction',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './fiction.component.html',
  styleUrl: './fiction.component.scss'
})
export class FictionComponent {
  searchText = '';
  isFocused = false;

  onInputChange() {
  }

  clearSearch() {
    this.searchText = '';
  }
}
