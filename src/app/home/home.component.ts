import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tags: string[] = [];
  tagInput: string = '';

  addTag() {
    if (this.tagInput.trim() !== '' && !this.tags.includes(this.tagInput)) {
      this.tags.push(this.tagInput.trim());
      this.tagInput = '';
    }
  }

  removeTag(index: number) {
    this.tags.splice(index, 1);
  }

}
