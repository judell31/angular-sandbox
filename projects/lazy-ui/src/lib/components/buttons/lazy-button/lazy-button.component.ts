import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lazy-button',
  templateUrl: './lazy-button.component.html',
  styleUrls: ['./lazy-button.component.css']
})
export class LazyButtonComponent implements OnInit {
  @Input() buttonLabel: string;
  @Input() btnEnabled: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
