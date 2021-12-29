import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lazy-back-stepper-button',
  templateUrl: './lazy-back-stepper-button.component.html',
  styleUrls: ['./lazy-back-stepper-button.component.css']
})
export class LazyBackStepperButtonComponent implements OnInit {
  @Input() buttonLabel: string;
  @Input() btnEnabled: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
