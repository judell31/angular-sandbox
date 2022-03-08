import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {FormSubmittedComponent} from "../../dialogs/success/form-submitted/form-submitted.component";
import {HttpClient} from "@angular/common/http";
import {fn} from "@angular/compiler/src/output/output_ast";

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
  filesArrayForm: FormGroup;
  dropDownOptions: any[];
  sixteenMb: number = 16777216;
  selectedFiles: FileList;
  selectedFileArray: File[] = [];
  fileType: string;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      console.log("5s delay")
    }, 5000);

    this.inputForm();
    this.firstGroupForm();
    this.secondGroupForm();
    this.filesFrom();

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
      singleFile: new FormControl(''),
      multiFile: new FormControl(''),
    });
  }

  filesFrom() {
    this.filesArrayForm = this.fb.group({
      files: this.fb.array([])
    })
  }

  createItem(data: any): FormGroup {
    return this.fb.group(data);
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
    this.selectedFileArray = [];
    this.inputFormGroup.reset();
  }

  get files(): FormArray {
    // console.log(this.filesArrayForm.value);
    return this.filesArrayForm.get('files') as FormArray;
  };

  log() {
    // console.log(this.inputFormGroup.value);
    // console.log(this.selectedFileArray);
    // console.log(this.inputFormGroup.value);
    console.log(this.filesArrayForm.value);

    const fd = new FormData();

    for (let f of this.filesArrayForm.value.files) {
      // console.log(this.filesArrayForm.value.files);
      // console.log(f.file)
      fd.append("specFiles", f.file)
    }

    this.http.post("http://localhost:8081/all-pallets-inc/quote", fd)
      .subscribe();

    this.filesArrayForm.reset();
  }

  onFileSelect(event: any) {
    this.selectedFiles = <FileList>event.target.files;

    // for (let i = 0; i < this.selectedFiles.length; i++) {
    for (let file of event.target.files) {
      this.files.push(
        this.createItem({file})
      )
      // this.selectedFileArray.push(this.selectedFiles[i]);
    }
  }

  send(){
    console.log(this.inputFormGroup.value);
    this.dialog.open(FormSubmittedComponent);
    this.reset();
  }
}
