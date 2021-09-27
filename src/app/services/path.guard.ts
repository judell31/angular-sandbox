import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

@Injectable()
export class PathGuard implements CanActivate {

  constructor(
    private router: Router
  ){}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if (this.router.url === "/") {
      this.router.navigate(["/home"]).then(() => {})
    }
  }
}
