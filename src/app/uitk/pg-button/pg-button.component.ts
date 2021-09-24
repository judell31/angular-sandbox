import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pg-button',
  templateUrl: './pg-button.component.html',
  styleUrls: ['./pg-button.component.scss']
})
export class PgButtonComponent implements OnInit {
  // @Input() buttonClass: string = "primary-btn";
  @Input() buttonLabel: string;
  @Input() btnEnabled: boolean = true;
  // @Output() clickHandler = new EventEmitter<any>();
  rippleLeft: string = "";
  rippleTop: string = "";
  nativeElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
  }

  ngOnInit(): void {
  }

  onClick(e: any) {
    this.ripple(e);
    // this.clickHandler.emit();
  }

  ripple(e: any) {
    const ripple: any = this.element.nativeElement.children[0].firstChild;
    const left = e.offsetX - 95;
    const top = e.offsetY - 90;
    this.rippleLeft = `${left}px`;
    this.rippleTop = `${top}px`;
    ripple.className = "animated";

    setTimeout(() => {
      ripple.className = "";
    }, 500);
  }

}
