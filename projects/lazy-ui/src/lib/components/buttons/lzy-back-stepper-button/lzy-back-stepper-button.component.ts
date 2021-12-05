import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-lzy-back-stepper-button',
  templateUrl: './lzy-back-stepper-button.component.html',
  styleUrls: ['./lzy-back-stepper-button.component.css']
})
export class LzyBackStepperButtonComponent implements OnInit {
  @Input() buttonLabel: string;
  @Input() btnEnabled: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
