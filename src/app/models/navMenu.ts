import {Injectable} from "@angular/core";
import {NavItem} from "./navItem";

@Injectable()
export class NavMenu {
  navItems: NavItem[] = [];
}
