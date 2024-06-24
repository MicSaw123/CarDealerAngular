import { Injectable } from "@angular/core";
import {BaseApiRequestsService} from "../GenericApiService/BaseApiRequests.service";
import {LoginDto} from "../../DataTransferObjects/Identity/LoginDto";
import {SuccessResponse} from "../../Responses/SuccessResponse";
import {LoginToken} from "../../Models/Identity/LoginToken";
import { environment } from "src/environments/environment.development";
import {Observable, catchError, throwError } from "rxjs";
import {RegisterDto} from "../../DataTransferObjects/Identity/RegisterDto";

@Injectable()

export class IdentityApiService {
  constructor(private apiRequests: BaseApiRequestsService) {
  }

  apiUrl = environment.apiUrl;

  Login(login: LoginDto){
    return this.apiRequests.post<SuccessResponse<LoginToken>>("Identity/Login", login).pipe(catchError(this.formatErrors));
  }

  Logout(){
    return this.apiRequests.post("Identity/Logout", {});
  }

  Register(register: RegisterDto){
    return this.apiRequests.post<SuccessResponse<null>>("Identity/Register", register);
  }

  private formatErrors(error:any): Observable<any> {
    return throwError(error);
  }
}
