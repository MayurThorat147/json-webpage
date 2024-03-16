import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

