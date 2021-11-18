import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {InvalidFormComponent} from '../../dialogs/errors/invalid-form/invalid-form.component';
import {FormSubmittedComponent} from "../../dialogs/success/form-submitted/form-submitted.component";

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  emailInputFormGroup: FormGroup;
  phoneNumberInputFormGroup: FormGroup;
  emailRegex = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.emailInputForm();
    this.phoneNumberInputForm();
  }

  emailInputForm() {
    this.emailInputFormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
    })
  }

  phoneNumberInputForm() {
    this.phoneNumberInputFormGroup = this.fb.group({
      phoneNumber: ['']
    })
  }

  reset() {
    this.phoneNumberInputFormGroup.reset();
    this.emailInputFormGroup.reset();
  }

  checkRequired(controlName: string, errorName: string) {
    return this.emailInputFormGroup.controls[controlName].hasError(errorName);
  }

  submit(){
    if (this.emailInputFormGroup.valid) {
      this.reset();
      this.dialog.open(FormSubmittedComponent)
    }
    else {
      this.dialog.open(InvalidFormComponent)
    }
  }

}
