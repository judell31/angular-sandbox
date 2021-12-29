import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lazy-next-stepper-button',
  templateUrl: './lazy-next-stepper-button.component.html',
  styleUrls: ['./lazy-next-stepper-button.component.css']
})
export class LazyNextStepperButtonComponent implements OnInit {
  @Input() buttonLabel: string;
  @Input() btnEnabled: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
