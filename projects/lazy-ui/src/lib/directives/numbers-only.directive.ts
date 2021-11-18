import {Directive, ElementRef, HostListener} from '@angular/core';
import {LazyInputComponent} from "../components/inputs/lazy-input/lazy-input.component";
import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

@Directive({
  selector: '[numbersOnly]'
})
export class NumbersOnlyDirective {
  private numbersOnlyRegex: RegExp = new RegExp(/^[1-9][0-9]*$/g);
  private phoneNumberPattern: RegExp = new RegExp("^(\\d{10}|\\d{12})$");
  initialValue: string = "";

  constructor(
    private elRef: ElementRef,
    private component: LazyInputComponent
  ) {
    // component.validators.push(this.numbersOnly());
    component.validators.push(this.validPhoneNumber());
    // component.patternErrorMap.set("numbersOnly", "Can only contain numbers");
    component.patternErrorMap.set("phoneNumber", "10 digits");
  }

  @HostListener('input')
  inputValidate() {
    const next = this.elRef.nativeElement.value;

    if (next !== "" && !next.match(this.numbersOnlyRegex)) {
      this.elRef.nativeElement.value = this.initialValue;
      this.elRef.nativeElement.dispatchEvent(new Event("input"));
    }
  }

  // @HostListener('input')
  // numbersOnly(): ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     const valid = this.numbersOnlyRegex.test(control.value);
  //     return !valid ? {numbersOnly: { requiredPattern: this.numbersOnlyRegex.source, actualValue: control.value}} : null;
  //   };
  // }

  validPhoneNumber(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const valid = this.phoneNumberPattern.test(control.value);
      return !valid ? {phoneNumber: { requiredPattern: this.phoneNumberPattern.source, actualValue: control.value}} : null;
    };
  }

  @HostListener("keydown")
  @HostListener("paste")
  @HostListener("drop")
  getInitialValue(): void {
    this.initialValue = this.elRef.nativeElement.value;
  }
}
