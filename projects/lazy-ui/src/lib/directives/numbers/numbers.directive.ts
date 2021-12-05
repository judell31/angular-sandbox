import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[numbers]'
})
export class NumbersDirective {
  private numbersOnlyRegex: RegExp = new RegExp(/^[1-9][0-9]*$/g);
  initialValue: string = "";

  constructor(
    private elRef: ElementRef,
  ) {}

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
}
