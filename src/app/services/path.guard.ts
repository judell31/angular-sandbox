import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

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
