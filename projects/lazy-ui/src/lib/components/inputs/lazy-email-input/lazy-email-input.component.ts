import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, ControlContainer, FormGroupDirective, ValidatorFn, Validators} from "@angular/forms";
import {MatFormFieldAppearance} from "@angular/material/form-field";

@Component({
  selector: 'lazy-email-input',
  templateUrl: './lazy-email-input.component.html',
  styleUrls: ['./lazy-email-input.component.css'],
  viewProviders: [{
    provide: ControlContainer,
    useExisting: FormGroupDirective,
  }]
})
export class LazyEmailInputComponent implements OnInit {
  @Input() required: boolean
  @Input() label: string
  @Input() minLength: number
  @Input() maxLength: number
  @Input() controlName: string
  @Input() autoComplete: string;
  @Input() iconName: string;
  @Input() type: string;
  @Input() hint: string;
  @Input() appearance: MatFormFieldAppearance;

  control: AbstractControl | null | undefined;
  validators: ValidatorFn[] = [];
  errorMessage: string;
  patternErrorMessage: string;
  patternErrorMap = new Map();

  constructor(
    private controlContainer: ControlContainer
  ) {}

  ngOnInit(): void {
    this.control = this.controlContainer.control?.get(this.controlName);

    if (this.required) {
      this.validators.push(Validators.required);
    }
    if (this.minLength !== undefined) {
      this.validators.push(Validators.minLength(this.minLength));
    }
    if (this.maxLength !== undefined) {
      this.validators.push(Validators.maxLength(this.maxLength));
    }

    this.updateValidators();
  }

  isControlValid() {
    return (this.control?.dirty || this.control?.touched) && this.control.invalid;
  }

  updateValidators() {
    this.control?.setValidators(this.validators);
    this.control?.updateValueAndValidity();
  }

  setErrorMessage() {
    if (this.hasError('required')) {
      this.errorMessage = this.label + ' is required ';
    }
    else if (this.hasPatternError()) {
      this.errorMessage = this.patternErrorMessage;
    }
    else if (this.hasError('minLength')) {
      this.errorMessage = this.label + " must be at least " + this.minLength + " characters ";
    }
    else if (this.hasError('maxLength')) {
      this.errorMessage = this.label + " cannot exceed " + this.maxLength + " characters ";
      console.log(this.errorMessage)
    }
    else {
      this.errorMessage = ""
    }
  }

  hasError(type: string) {
    return this.control?.errors !== null && this.control?.errors[type];
  }

  hasPatternError() {
    let hasPatternError: boolean = false;
    const patternErrors: string[] = Array.from(this.patternErrorMap.keys());

    for (let i = 0; i < patternErrors.length; i++) {
      const patternError = patternErrors[i];
      if (this.control?.errors !== null && this.control?.errors[patternError]) {
        hasPatternError = true;
        this.patternErrorMessage = this.patternErrorMap.get(patternError);
        break;
      }
    }

    return hasPatternError;
  }
}
