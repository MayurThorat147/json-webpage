import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  searchQuery: string = '';

  search() {
    // Implement search functionality here
    console.log('Searching for:', this.searchQuery);
  }

  constructor(private _dialog: MatDialog,) {}
  openUserForm(){
    this._dialog.open(UserRegistrationComponent)
  }
}
