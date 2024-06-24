import { Injectable } from "@angular/core";
import {BaseApiRequestsService} from "../GenericApiService/BaseApiRequests.service";
import {SuccessResponse} from "../../Responses/SuccessResponse";
import {PreviouslyDamagedDto} from "../../DataTransferObjects/Cars/PreviouslyDamagedDto";

@Injectable()

export class PreviouslyDamagedApiService {
  constructor(private apiRequests: BaseApiRequestsService) {
  }

  GetPreviouslyDamaged(){
    return this.apiRequests.get<SuccessResponse<PreviouslyDamagedDto[]>>("PreviouslyDamaged/GetPreviouslyDamaged")
  }
}
