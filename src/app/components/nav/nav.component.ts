import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output() sideNavToggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onToggleSidenav() {
    this.sideNavToggle.emit();
  }
}
