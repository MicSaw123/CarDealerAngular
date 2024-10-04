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

  UploadImageOnListingCreation(images: any, path: string) {
    return this.apiRequests.post<SuccessResponse<any>>("Image/UploadImageToFTP?directoryName=" + path, images);
  }

  UploadImagesToExistingFTPDirectory(images: any, path: string) {
    return this.apiRequests.post<SuccessResponse<null>>("Image/UploadImagesToExistingFTPDirectory?dirName=" + path, images)
  }

  DeleteImage(directoryName: string, imageName: string){
    return this.apiRequests.delete<SuccessResponse<null>>("Image/DeleteImageFromFTP" +
      "?directoryName=" + directoryName +
      "&fileName=" + imageName)
  }
}
