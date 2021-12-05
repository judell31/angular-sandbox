import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, ControlContainer, FormGroupDirective, ValidatorFn, Validators} from "@angular/forms";
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {DropDownOption} from "./DropDownOption";

@Component({
  selector: 'lazy-drop-down',
  templateUrl: './lazy-drop-down.component.html',
  styleUrls: ['./lazy-drop-down.component.css'],
  viewProviders: [{
    provide: ControlContainer,
    useExisting: FormGroupDirective,
  }]
})
export class LazyDropDownComponent implements OnInit {
  @Input() required: boolean
  @Input() label: string
  @Input() placeHolder: string
  @Input() options: DropDownOption[]
  @Input() controlName: string
  @Input() iconName: string;
  @Input() appearance: MatFormFieldAppearance;

  control: AbstractControl | null | undefined;
  validators: ValidatorFn[] = [];
  errorMessage: string;

  constructor(
    private controlContainer: ControlContainer
  ) {}

  ngOnInit(): void {
    this.control = this.controlContainer.control?.get(this.controlName);

    if (this.required) {
      this.validators.push(Validators.required);
    }

    this.updateValidators();
  }

  updateValidators() {
    this.control?.setValidators(this.validators);
    this.control?.updateValueAndValidity();
  }

  setErrorMessage() {
    if (this.hasError('required')) {
      this.errorMessage = 'This field is required ';
    }
    else {
      this.errorMessage = ""
    }
  }

  hasError(type: string) {
    return this.control?.errors !== null && this.control?.errors[type];
  }
}
