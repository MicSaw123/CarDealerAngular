import {Injectable} from "@angular/core";
import {BaseApiRequestsService} from "../GenericApiService/BaseApiRequests.service";
import {SuccessResponse} from "../../Responses/SuccessResponse";
import {EngineDto} from "../../DataTransferObjects/Cars/EngineDto";

@Injectable()

export class EngineApiService{
  constructor(private apiRequests: BaseApiRequestsService) {
  }

  GetEngines(){
    return this.apiRequests.get<SuccessResponse<EngineDto[]>>("Engine/GetEngines")
  }
}
