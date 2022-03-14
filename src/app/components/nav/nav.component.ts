import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NavItem} from "../../models/navItem";
import {NavMenu} from "../../models/navMenu";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  navItems: NavItem[];
  open: boolean = true;

  constructor(public navMenu: NavMenu) { }

  ngOnInit(): void {
    this.navItems = this.navMenu.navItems;
  }
}
