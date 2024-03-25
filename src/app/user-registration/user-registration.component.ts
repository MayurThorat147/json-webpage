import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../Services/data.service';
import { Router } from '@angular/router';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

export interface AutoCompleteModel {
  value: any,
  display: string
}

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  
  imageUrl: any;
  registerForm : FormGroup;
  selectedvalue=20;
  addressForm: FormGroup;
  userData: any;
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



  constructor(private dialogRef: MatDialogRef<UserRegistrationComponent>, 
    private _fb: FormBuilder, 
    private _dataService: DataService, 
    private router: Router,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA)public data: any ) {

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

  this.addressForm = this.formBuilder.group({
    address: ['', [Validators.required, this.addressWordLimitValidator(5)]] 
  });
  }

  url="/assets/default.jpeg";

  onselectFile(e: any): void {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
    }
  }

  addressWordLimitValidator(maxWords: number) {
    return (control: { value: { trim: () => { (): any; new(): any; split: { (arg0: RegExp): { (): any; new(): any; length: any; }; new(): any; }; }; }; }) => {
      if (control.value) {
        const words = control.value.trim().split(/\s+/).length;
        return words > maxWords ? { exceedLimit: true } : null;
      }
      return null;
    };
  }

 onFormSubmit(): void
 {
  if(this.registerForm.valid){
    const formData = { ...this.registerForm.value, imageUrl: this.imageUrl };
    if(this.data)
    {
    console.log(formData);
    this._dataService.updateUser(this.data.id, formData).subscribe(res => {
      alert("User Edited Successfully"); 
      this.dialogRef.close(true);
    })
  }
  else{
    console.log(formData)
    this._dataService.addUser(formData).subscribe(res => {
      alert("User Added Successfully");
      this.router.navigate(['/user-profile']); 
      this.dialogRef.close(true);
    })
  }
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

  ngOnInit(): void {
    // Subscribe to user data changes
    this.imageUrl = this.data.imageUrl || 'assets/default.jpeg';
    this.registerForm.patchValue(this.data);
    this._dataService.userData$.subscribe(data => {
      this.userData = data;
    });
  }

}

