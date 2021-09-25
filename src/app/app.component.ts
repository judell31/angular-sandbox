import {Component, OnInit} from '@angular/core';
import {NavMenu} from "./models/navMenu";
import {NavItem} from "./models/navItem";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private navMenu: NavMenu) {}

  ngOnInit(): void {
    this.buildNav();
  }

  buildNav() {
    let homeItem = new NavItem;
    homeItem.text = "Home";
    homeItem.link = "/home";
    homeItem.icon = "home"
    homeItem.routerLinkActiveOption = true
    this.navMenu.navItems.push(homeItem);

    let aboutItem = new NavItem;
    aboutItem.text = "About";
    aboutItem.link = "/about";
    aboutItem.icon = "info"
    aboutItem.routerLinkActiveOption = false
    this.navMenu.navItems.push(aboutItem);

    let contactItem = new NavItem;
    contactItem.text = "Contact";
    contactItem.link = "/contact";
    contactItem.icon = "person"
    contactItem.routerLinkActiveOption = false
    this.navMenu.navItems.push(contactItem);

    let logoutItem = new NavItem;
    logoutItem.text = "Logout";
    logoutItem.link = "/logout";
    logoutItem.icon = "logout"
    logoutItem.routerLinkActiveOption = false
    this.navMenu.navItems.push(logoutItem);
  }
}
