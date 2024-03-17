import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../Services/data.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  user: any;
  formData: any;

  constructor(private _dialog: MatDialog, private _dataservice: DataService, private route: ActivatedRoute) {}
  
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
}
