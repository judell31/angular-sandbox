import {Component, OnInit} from '@angular/core';
import {NavMenu} from "./models/navMenu";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private navMenu: NavMenu,
  ) {}

  ngOnInit(): void {
    this.navMenu.navItems = [
      {
        text: "Home",
        link: "/home",
        icon: "icon"
      },
      {
        text: "About",
        link: "/about",
        icon: "info"
      },
      {
        text: "Contact",
        link: "/contact",
        icon: "person"
      },
      {
        text: "Logout",
        link: "/logout",
        icon: "logout"
      }
    ];
  }
}
