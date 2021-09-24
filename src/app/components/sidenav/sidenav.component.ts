import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() closeSideNav = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.closeSideNav.emit();
  }
}
