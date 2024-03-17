import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../Services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  
  imageUrl: any;
  registerForm : FormGroup;
  selectedvalue=20;



  constructor(private dialogRef: MatDialogRef<UserRegistrationComponent>, 
    private _fb: FormBuilder, 
    private _dataService: DataService, 
    private router: Router,
    private formBuilder: FormBuilder ) {

  this.registerForm = this._fb.group({
   
    firstname: '',
    lastname: '',
    imageUrl: '',
    email: '',
    phoneNumber: '',
    age: '',
    state: '',
    country: '',
    address: '',
    tagNameInputValue: '',
    status: '',
  });
  }
  onFormSubmit() 
  {
    if(this.registerForm.valid){
      console.log(this.registerForm.value)
      this._dataService.addUser(this.registerForm.value).subscribe(res => {
      })
    } 
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
    }
  }
}

