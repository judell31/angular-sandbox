import {Directive, ElementRef, HostListener} from '@angular/core';
import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import {LazyPhoneInputComponent} from "../../components/inputs/lazy-phone-input/lazy-phone-input.component";

@Directive({
  selector: '[phoneNumber]'
})
export class PhoneNumberDirective {
  numbersOnlyRegex: RegExp = new RegExp(/^[1-9][0-9]*$/g);
  phoneNumberPattern: RegExp = new RegExp(/^(\\d{10}|\\d{12})$/g);
  initialValue: string = "";

  constructor(
    private elRef: ElementRef,
    private component: LazyPhoneInputComponent
  ) {
    component.validators.push(this.validPhoneNumber());
    component.patternErrorMap.set("phoneNumber", " Must be 10 digits long");
  }

  @HostListener('input')
  inputValidate() {
    const next = this.elRef.nativeElement.value;

    if (next !== "" && !next.match(this.numbersOnlyRegex)) {
      this.elRef.nativeElement.value = this.initialValue;
      this.elRef.nativeElement.dispatchEvent(new Event("input"));
    }
  }

  @HostListener("keydown")
  @HostListener("paste")
  @HostListener("drop")
  getInitialValue(): void {
    this.initialValue = this.elRef.nativeElement.value;
  }

  validPhoneNumber(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const valid = this.phoneNumberPattern.test(control.value);
      return !valid ? {phoneNumber: { requiredPattern: this.phoneNumberPattern.source, actualValue: control.value}} : null;
    };
  }

}
