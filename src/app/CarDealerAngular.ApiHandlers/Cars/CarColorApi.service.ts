import {BaseApiRequestsService} from "../GenericApiService/BaseApiRequests.service";
import {SuccessResponse} from "../../Responses/SuccessResponse";
import { Injectable } from "@angular/core";

@Injectable()

export class CarColorApiService {

  constructor(private apiRequests: BaseApiRequestsService) {
  }

  AddCarColor(carColor: any){
    return this.apiRequests.post<SuccessResponse<null>>("CarColor/AddCarColor", carColor);
  }
}
