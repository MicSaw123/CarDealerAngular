import {HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from "@angular/common/http";
import {AuthGuardService} from "../Services/AuthGuardService";
import {Injectable} from "@angular/core";

@Injectable()

export class TokenInterceptor implements HttpInterceptor {


  constructor(public auth: AuthGuardService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('Token');
    if(token) {
      req = req.clone({
        setHeaders: {Authorization: `Bearer ${token}`}
      });
    }
      return next.handle(req)
  }
}
