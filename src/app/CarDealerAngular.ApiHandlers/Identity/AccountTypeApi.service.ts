import {BaseApiRequestsService} from "../GenericApiService/BaseApiRequests.service";
import {SuccessResponse} from "../../Responses/SuccessResponse";
import {AccountTypeDto} from "../../DataTransferObjects/Identity/AccountTypeDto";
import { Injectable } from "@angular/core";

@Injectable()

export class AccountTypeApiService {
  constructor(private apiRequests: BaseApiRequestsService) {
  }

  GetAccountTypes(){
    return this.apiRequests.get<SuccessResponse<AccountTypeDto[]>>("AccountType/GetAccountTypes");
  }
}
