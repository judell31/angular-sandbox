import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

@Injectable()
export class PathGuard implements CanActivate {

  constructor(
    private router: Router
  ){}

  //Todo: not sure if i need all of the types or can use void somehow
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if (this.router.url === "/") {
      this.router.navigate(["/home"]).then(() => {})
    }
  }
}
