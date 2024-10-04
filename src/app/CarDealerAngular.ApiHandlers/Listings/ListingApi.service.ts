import {BaseApiRequestsService} from "../GenericApiService/BaseApiRequests.service";
import {SuccessResponse} from "../../Responses/SuccessResponse";
import { Injectable } from "@angular/core";
import {GetListingsDto} from "../../DataTransferObjects/Listing/GetListingsDto/GetListingsDto";
import {ListingsSearchConditions} from "../../DataTransferObjects/Listing/ListingsSearchConditions";


@Injectable()

export class ListingApiService{
  constructor(private apiRequests: BaseApiRequestsService) {
  }

  GetListings(){
    return this.apiRequests.get<SuccessResponse<GetListingsDto[]>>("Listing/GetActiveListings");
  }

  GetListingById(id: number){
    return this.apiRequests.get<SuccessResponse<GetListingsDto>>("Listing/GetListingById?id=" + id);
  }

  GetListingsBySellerId(id: number){
    return this.apiRequests.get<SuccessResponse<GetListingsDto[]>>("Listing/GetListingsBySellerId?id=" + id)
  }

  UpdateListing(listing: any, path: string){
    return this.apiRequests.put<SuccessResponse<null>>("Listing/UpdateListing?path=" + path, listing);
  }

  PostListing(listing: any){
    return this.apiRequests.post<SuccessResponse<null>>("Listing/AddListing", listing);
  }

  DeleteListing(id: number){
    return this.apiRequests.delete("Listing/DeleteListing?id=" + id);
  }

  ChangeListingStatus(id: number, status: boolean){
    return this.apiRequests.put<SuccessResponse<null>>("Listing/ChangeListingStatus?status=" + status, id)
  }

  FilterListings(sortingId: number,listingsSearchConditions: ListingsSearchConditions){
    return this.apiRequests.post<SuccessResponse<GetListingsDto[]>>("Listing/FilterListings?sortingId=" + sortingId,
      listingsSearchConditions);
  }
}
