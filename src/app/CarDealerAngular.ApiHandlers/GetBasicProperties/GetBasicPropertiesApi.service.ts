import { Injectable } from "@angular/core";
import {BaseApiRequestsService} from "../GenericApiService/BaseApiRequests.service";
import {SuccessResponse} from "../../Responses/SuccessResponse";

@Injectable()

export class GetBasicPropertiesApiService {

  constructor(private apiRequests: BaseApiRequestsService) {
  }

  GetBasicProperties(){
    return this.apiRequests.get<SuccessResponse<BaseApiRequestsService>>("GetBasicProperties/GetBasicProperties");
  }
}
