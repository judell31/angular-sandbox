import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {SuccessDialogComponent} from "../shared/dialogs/success/success-dialog/success.dialog.component";

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  inputFormGroup: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  dropDownOptions: any[];

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      console.log("5s delay")
    }, 5000);

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
    ];
  }

  inputForm() {
    this.inputFormGroup = this.fb.group({
      email: new FormControl(''),
      firstName: new FormControl(''),
      phoneNumber: new FormControl(''),
      dropDown: new FormControl(''),
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

  reset() {
    this.inputFormGroup.reset();
  }

  send(){
    console.log(this.inputFormGroup.value);
    this.dialog.open(SuccessDialogComponent);
    this.reset();
  }
}
