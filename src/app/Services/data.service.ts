import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  addUser(data:any) 
  {
    return this._http.post('http://localhost:3000/users',data);
  }

  GetUsers() 
  {
    return this._http.get('http://localhost:3000/users'); 
  }
}
