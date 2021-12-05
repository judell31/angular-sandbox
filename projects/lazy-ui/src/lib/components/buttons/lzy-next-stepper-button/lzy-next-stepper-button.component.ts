import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-lzy-next-stepper-button',
  templateUrl: './lzy-next-stepper-button.component.html',
  styleUrls: ['./lzy-next-stepper-button.component.css']
})
export class LzyNextStepperButtonComponent implements OnInit {
  @Input() buttonLabel: string;
  @Input() btnEnabled: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
