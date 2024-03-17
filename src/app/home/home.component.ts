import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  addTagsOnEnter: boolean = false;
  tags: string[] = [];
  tagNameInputValue: string = '';

  addTag(tagName: string): void {
    if (this.addTagsOnEnter && tagName.trim() !== '') {
      this.tags.push(tagName.trim());
      this.tagNameInputValue = '';
    }
  }

  removeTag(index: number): void {
    this.tags.splice(index, 1);
  }
}
