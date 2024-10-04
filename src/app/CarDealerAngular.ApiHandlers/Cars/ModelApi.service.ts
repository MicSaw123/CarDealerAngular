import {Injectable} from "@angular/core";
import {BaseApiRequestsService} from "../GenericApiService/BaseApiRequests.service";
import {SuccessResponse} from "../../Responses/SuccessResponse";
import {ModelDto} from "../../DataTransferObjects/Cars/ModelDto";

@Injectable()

export class ModelApiService {

  constructor(private apiRequests: BaseApiRequestsService) {
  }


  GetModelsByManufacturerId(manufacturerId: number){
    return this.apiRequests.get<SuccessResponse<ModelDto[]>>("Model/GetModelsByManufacturerId?manufacturerId=" + manufacturerId);
  }

}
