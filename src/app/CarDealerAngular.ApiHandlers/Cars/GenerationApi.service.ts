import {environment} from "../../../environments/environment.development";
import {Injectable} from "@angular/core";
import {BaseApiRequestsService} from "../GenericApiService/BaseApiRequests.service";
import {SuccessResponse} from "../../Responses/SuccessResponse";
import {GenerationDto} from "../../DataTransferObjects/Cars/GenerationDto";

@Injectable()

export class GenerationApiService{
  apiUrl = environment.apiUrl;
  constructor(private apiRequests: BaseApiRequestsService) {}

  GetGenerationsByModelId(modelId: number){
    return this.apiRequests.get<SuccessResponse<GenerationDto[]>>("Generation/GetGenerationsByModelId?modelId=" + modelId);
  }

}
