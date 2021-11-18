import {Directive, ElementRef, HostListener} from '@angular/core';
import {LazyInputComponent} from "../components/inputs/lazy-input/lazy-input.component";
import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

@Directive({
  selector: '[numbersOnly]'
})
export class NumbersOnlyDirective {
  private numbersOnlyRegex: RegExp = new RegExp(/^[1-9][0-9]*$/g);
  initialValue: string = "";

  constructor(
    private elRef: ElementRef,
    private component: LazyInputComponent
  ) {
    component.validators.push(this.numbersOnly());
    component.patternErrorMap.set("numbersOnly", "Can only contain numbers");
  }

  @HostListener('input')
  inputValidate() {
    const next = this.elRef.nativeElement.value;

    if (next !== "" && !next.match(this.numbersOnlyRegex)) {
      this.elRef.nativeElement.value = this.initialValue;
      this.elRef.nativeElement.dispatchEvent(new Event("input"));
    }
  }

  numbersOnly(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const valid = this.numbersOnlyRegex.test(control.value);
      return !valid ? {numbersOnly: { requiredPattern: this.numbersOnlyRegex.source, aactualValue: control.value}} : null;
    };
  }

  @HostListener("keydown")
  @HostListener("paste")
  @HostListener("drop")
  getInitialValue(): void {
    this.initialValue = this.elRef.nativeElement.value;
  }
}
