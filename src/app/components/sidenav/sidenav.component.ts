import { Component, OnInit } from '@angular/core';
import {NavMenu} from "../../models/navMenu";
import {NavItem} from "../../models/navItem";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  navItems: NavItem[];

  constructor(public navMenu: NavMenu) { }

  ngOnInit(): void {
    this.navItems = this.navMenu.navItems;
  }

  //FixMe: have to double click the button twice to get the sidebar back
  hideSideNav() {
    document.getElementById("offcanvas")!
      .classList.remove("show");

    setTimeout(() => {
      document.getElementById("offcanvas")!
        .setAttribute("style", "visibility:hidden;");
    }, 100);

    document.getElementsByClassName("offcanvas-backdrop")[0].remove();

    document.getElementsByTagName("body")[0]
      .removeAttribute("style");

    document.getElementById("offcanvas")!
      .setAttribute("aria-hidden", "true");

    document.getElementById("offcanvas")!
      .removeAttribute("aria-modal");

    document.getElementById("offcanvas")!
      .removeAttribute("role");
  }
}
