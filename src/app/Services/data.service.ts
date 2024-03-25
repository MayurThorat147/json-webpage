import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private userDataSubject = new BehaviorSubject<any>(null);
  userData$ = this.userDataSubject.asObservable();

  constructor(private _http: HttpClient) { }

  addUser(data:any) 
  {
    return this._http.post('http://localhost:3000/users',data);
  }

  GetUsers() 
  {
    return this._http.get('http://localhost:3000/users'); 
  }
  setUserData(userData: any) {
    this.userDataSubject.next(userData);
  }
  updateUser(id:number, data: any)
  {
    return this._http.put(`http://localhost:3000/users/${id}`,data);
  }
}
