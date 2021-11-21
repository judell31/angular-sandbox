import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
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
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.inputForm();
  }

  inputForm() {
    this.inputFormGroup = this.fb.group({
      email: [''],
      firstName: [''],
      phoneNumber: ['']
    })
  }

  reset() {
    this.inputFormGroup.reset();
  }

  submit(){
    console.log(this.inputFormGroup.value)
    this.dialog.open(FormSubmittedComponent)
    this.reset();
  }
}
