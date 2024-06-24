import {AuthGuardService} from "../Services/AuthGuardService";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()

export class AuthService implements CanActivate{
  constructor(private authService: AuthGuardService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
    if(this.authService.isLoggedIn()){
      return true;
    }
    else{
        this.router.navigate(['../login']);
        return false;
    }
  }
}
