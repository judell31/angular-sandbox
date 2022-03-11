import {Component, OnInit} from '@angular/core';
import {NavMenu} from "./models/navMenu";

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
        text: "NGM Form",
        link: "/ng-material",
        icon: "description"
      },
      {
        text: "BS Grid",
        link: "/bootstrap-grid",
        icon: "grid_view"
      }
    ];
  }
}
