import {Directive} from '@angular/core';
import {LazyInputComponent} from "../../components/inputs/lazy-input/lazy-input.component";
import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

@Directive({
  selector: '[phoneNumber]'
})
export class PhoneNumberDirective {
  private phoneNumberPattern: RegExp = new RegExp("^(\\d{10}|\\d{12})$");

  constructor(
    private component: LazyInputComponent
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
