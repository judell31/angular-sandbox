import {Directive, ElementRef} from '@angular/core';
import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import {LazyNumberInputComponent} from "../../components/inputs/lazy-number-input/lazy-number-input.component";

@Directive({
  selector: '[phoneNumber]'
})
export class PhoneNumberDirective {
  phoneNumberPattern: RegExp = new RegExp("^(\\d{10}|\\d{12})$");
  initialValue: string = "";

  constructor(
    private elRef: ElementRef,
    private component: LazyNumberInputComponent
  ) {
    component.validators.push(this.validPhoneNumber());
    component.patternErrorMap.set("phoneNumber", " Must be 10 digits long");
  }

  validPhoneNumber(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const valid = this.phoneNumberPattern.test(control.value);
      return !valid ? {phoneNumber: { requiredPattern: this.phoneNumberPattern.source, actualValue: control.value}} : null;
    };
  }
}
