import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {FormSubmittedComponent} from "../../dialogs/success/form-submitted/form-submitted.component";

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  inputFormGroup: FormGroup;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  dropDownOptions: any[];

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.inputForm();
    this.firstGroupForm();
    this.secondGroupForm();

    this.dropDownOptions = [
      {
        name: "name",
        value: "value"
      },
      {
        name: "name1",
        value: "value1"
      }
    ]
  }

  inputForm() {
    this.inputFormGroup = this.fb.group({
      email: new FormControl(''),
      firstName: new FormControl(''),
      phoneNumber: new FormControl(''),
      dropDown: new FormControl('')
    });
  }

  firstGroupForm() {
    this.firstFormGroup = this.fb.group({
      firstCtrl: new FormControl(''),
    })
  }

  secondGroupForm() {
    this.secondFormGroup = this.fb.group({
      secondCtrl: new FormControl(''),
    })
  }

  submitStepperForm() {
    console.log(this.firstFormGroup.value);
    console.log(this.secondFormGroup.value);
    this.dialog.open(FormSubmittedComponent);
    this.secondFormGroup.reset();
    this.firstFormGroup.reset();
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
