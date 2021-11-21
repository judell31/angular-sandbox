import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lzy-button',
  templateUrl: './lzy-button.component.html',
  styleUrls: ['./lzy-button.component.css']
})
export class LzyButtonComponent implements OnInit {
  @Input() buttonLabel: string;
  @Input() btnEnabled: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
