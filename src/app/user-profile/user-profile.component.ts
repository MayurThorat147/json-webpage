import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  user: any;
  formData: any;

  constructor(private _dataservice: DataService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params && params['formData']) {
        this.formData = JSON.parse(params['formData']);
      }
    })
  }

  ngOnInit()
  {
    this.getUsersList();
  }
  getUsersList()
  {
    this._dataservice.GetUsers().subscribe(res => {
      
    })
  }
}
