import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[numbersOnly]'
})
export class NumbersOnlyDirective {
  private numbersOnlyRegex: RegExp = new RegExp(/^[1-9][0-9]*$/g);
  initialValue: string = "";

  constructor(
    private elRef: ElementRef,
  ) {}

  @HostListener('input')
  inputValidate() {
    const next = this.elRef.nativeElement.$data.value;

    console.log(next)

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
