import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NavMenu} from "../../models/navMenu";
import {NavItem} from "../../models/navItem";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() closeSideNav = new EventEmitter<void>();

  navItems: NavItem[];

  constructor(public navMenu: NavMenu) { }

  ngOnInit(): void {
    this.navItems = this.navMenu.navItems;
  }

  onClose() {
    this.closeSideNav.emit();
  }
}
