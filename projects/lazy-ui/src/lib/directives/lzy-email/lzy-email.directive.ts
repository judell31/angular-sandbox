import {Directive} from '@angular/core';
import {LazyEmailInputComponent} from "../../components/inputs/lazy-email-input/lazy-email-input.component";
import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

@Directive({
  selector: '[lzyEmail]'
})
export class LzyEmailDirective {
  emailPattern: RegExp = new RegExp("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[a-z]{2,3}");

  constructor(
    private component: LazyEmailInputComponent
  ) {
    component.validators.push(this.validEmail());
    component.patternErrorMap.set("email", "Must be a valid email");
  }

  validEmail(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const valid = this.emailPattern.test(control.value);
      return !valid ? {email: { requiredPattern: this.emailPattern.source, actualValue: control.value}} : null;
    };
  }
}
