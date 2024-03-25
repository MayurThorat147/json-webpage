import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../Services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  user: any;
  formData: any;
  url: string ="/assets/default.jpeg";
  router: any;

  constructor(private _dialog: MatDialog, private _dataservice: DataService, private route: ActivatedRoute) {}

  
  selectImage(): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event: any) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        this.url = e.target.result;
      }
    };
    input.click();
  }


  ngOnInit()
  {
    this.getUsersList();
  }
  getUsersList()
  {
    this._dataservice.GetUsers().subscribe((res:any) => {
      if (res && res.length > 0){
        this.user = res[0];
      }else{
        this.user = null;
      }
    })
  }
  openEditUserForm(data:any)
  {
    const dialogRef = this._dialog.open(UserRegistrationComponent , {data});
    dialogRef.afterClosed().subscribe(res => {
      if(res)
      {
        this.getUsersList();
      }
    })
  }
  openUserForm()
  {
    const dialogRef = this._dialog.open(UserRegistrationComponent);
    dialogRef.afterClosed().subscribe(res => {
      if(res)
      {
        this.getUsersList();
      }
    })
  }
}
