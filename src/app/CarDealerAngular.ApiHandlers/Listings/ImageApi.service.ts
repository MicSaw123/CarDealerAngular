import {BaseApiRequestsService} from "../GenericApiService/BaseApiRequests.service";
import {Injectable} from "@angular/core";
import {SuccessResponse} from "../../Responses/SuccessResponse";

@Injectable()

export class ImageApiService {

  constructor(private apiRequests: BaseApiRequestsService) {
  }

  GetImages(dirName: string) {
    return this.apiRequests.get<SuccessResponse<Uint32Array[]>>("Image/DownloadImageFromFTP?directoryName=" + dirName);
  }

}
