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
  inputFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.inputForm();
  }

  inputForm() {
    this.inputFormGroup = this.fb.group({
      email: ['',{disabled: true}, [Validators.required]],
    })
  }

  reset() {
    this.inputFormGroup.reset();
  }

  submit(){
    if (this.inputFormGroup.valid) {
      console.log(this.inputFormGroup.value);
      this.reset();
      this.dialog.open(FormSubmittedComponent)
    }
    else {
      this.dialog.open(InvalidFormComponent)
    }
  }

}
