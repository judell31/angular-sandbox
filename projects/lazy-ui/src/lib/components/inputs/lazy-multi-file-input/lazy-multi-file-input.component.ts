import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, ControlContainer, FormGroupDirective, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'lazy-multi-file-input',
  templateUrl: './lazy-multi-file-input.component.html',
  styleUrls: ['./lazy-multi-file-input.component.css'],
  viewProviders: [{
    provide: ControlContainer,
    useExisting: FormGroupDirective,
  }]
})
export class LazyMultiFileInputComponent implements OnInit {
  @Input() controlName: string
  @Input() buttonLabel: string;
  @Input() btnEnabled: boolean = true;
  @Input() matIcon: string;
  @Input() style: string;
  @Input() name: string;
  @Input() required: boolean;
  @Input() maxFileSize: number;
  @Input() maxFiles: number;
  @Input() maxSizeDescription: string;
  @Input() fileType: string;
  @Input() triggerFileSelectFunc: Function;
  @Input() selectedFileArray: File[] = [];

  control: AbstractControl | null | undefined;
  validators: ValidatorFn[] = [];
  errorMessage: string;

  constructor(
    private controlContainer: ControlContainer
  ) { }

  ngOnInit(): void {
    this.control = this.controlContainer.control?.get(this.controlName);

    if (this.required) {
      this.validators.push(Validators.required);
    }

   this.updateValidators();
  }

  isControlValid() {
    return (this.control?.dirty || this.control?.touched) && this.control.invalid;
  }

  setErrorMessage() {
    if (this.hasError('required')) {
      this.errorMessage = 'This field is required ';
    }
    // else if (this.selectedFileArray.length > 10) {
    //   this.control?.setErrors({"err": true})
    //   this.errorMessage = "Cannot upload more than 10 files"
    // }
    else {
      this.errorMessage = ""
    }
  }

  hasError(type: string) {
    return this.control?.errors !== null && this.control?.errors[type];
  }

  updateValidators() {
    this.control?.setValidators(this.validators);
    this.control?.updateValueAndValidity();
  }

  removeAllFiles() {
    for (let i = 0; i < this.selectedFileArray.length; i++) {
      this.selectedFileArray.splice(i);
    }
  }

  removeFile(fileName: string) {
    for (let i = 0; i < this.selectedFileArray.length; i++) {
      if (this.selectedFileArray[i].name == fileName) {
        this.selectedFileArray.splice(i, 1);
      }
    }
  }

  triggerFileSelect(event: any) {
    this.triggerFileSelectFunc(event);
  }
}
