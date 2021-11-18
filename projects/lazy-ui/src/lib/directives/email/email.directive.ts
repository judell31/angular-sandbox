import { Directive } from '@angular/core';
import {LazyInputComponent} from "../../components/inputs/lazy-input/lazy-input.component";
import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

@Directive({
  selector: '[lzy-email]'
})
export class EmailDirective {
  private emailRegex: RegExp = new RegExp("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}");

  constructor(
    private component: LazyInputComponent
  ) {
    component.validators.push(this.validPhoneNumber());
    component.patternErrorMap.set("email", " Must be a valid email");
  }

  validPhoneNumber(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const valid = this.emailRegex.test(control.value);
      return !valid ? {email: { requiredPattern: this.emailRegex.source, actualValue: control.value}} : null;
    };
  }

}
