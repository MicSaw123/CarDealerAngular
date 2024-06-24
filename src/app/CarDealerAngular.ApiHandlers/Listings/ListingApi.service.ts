import {BaseApiRequestsService} from "../GenericApiService/BaseApiRequests.service";
import {ListingDto} from "../../DataTransferObjects/Listing/ListingDto";
import {SuccessResponse} from "../../Responses/SuccessResponse";
import { Injectable } from "@angular/core";
import {GetListingsDto} from "../../DataTransferObjects/Listing/GetListingsDto/GetListingsDto";

@Injectable()

export class ListingApiService{
  constructor(private apiRequests: BaseApiRequestsService) {
  }

  GetListings(){
    return this.apiRequests.get<SuccessResponse<GetListingsDto[]>>("Listing/GetListings");
  }

  GetListingById(id: number){
    return this.apiRequests.get<SuccessResponse<GetListingsDto>>("Listing/GetListingById?id=" + id);
  }

  GetListingsBySellerId(id: number){
    return this.apiRequests.get<SuccessResponse<GetListingsDto[]>>("Listing/GetListingsBySellerId?id=" + id)
  }

  UpdateListing(listingDto: ListingDto){
    return this.apiRequests.put<SuccessResponse<ListingDto>>("Listing/UpdateListing", listingDto);
  }

  PostListing(listing: ListingDto, images: any){
    return this.apiRequests.post<SuccessResponse<null>>("Listing/AddListing" +
      "?SellerId=" + listing.SellerId +
      "&Title=" + listing.Title +
      "&Description=" + listing.Description +
      "&IdentifiedVehicles.Vin=" + listing.IdentifiedVehicles.Vin +
      "&IdentifiedVehicles.ProductionDate=" + listing.IdentifiedVehicles.ProductionDate +
      "&IdentifiedVehicles.FirstRegistrationDate=" + listing.IdentifiedVehicles.FirstRegistrationDate +
      "&IdentifiedVehicles.CountryOfOriginId=" + listing.IdentifiedVehicles.CountryOfOriginId +
      "&IdentifiedVehicles.PreviouslyDamagedId=" + listing.IdentifiedVehicles.PreviouslyDamagedId +
      "&ListedCar.LicensePlate=" + listing.ListedCar.LicensePlate +
      "&ListedCar.PreviouslyDamagedId=" + listing.IdentifiedVehicles.PreviouslyDamagedId +
      "&ListedCar.PreviousOwners=" + listing.ListedCar.PreviousOwners +
      "&ListedCar.CarConditionId=" + listing.ListedCar.CarConditionId +
      "&ListedCar.Mileage=" + listing.ListedCar.Mileage +
      "&ListedCar.CarColorId=" + listing.ListedCar.CarColorId +
      "&ListedCar.ListedCarSpecification.CarTypeId=" + listing.ListedCar.ListedCarSpecification.CarTypeId +
      "&ListedCar.ListedCarSpecification.DoorQuantityId=" + listing.ListedCar.ListedCarSpecification.DoorQuantityId +
      "&ListedCar.ListedCarSpecification.GenerationId=" + listing.ListedCar.ListedCarSpecification.GenerationId +
      "&ListedCar.ListedCarSpecification.EngineId=" + listing.ListedCar.ListedCarSpecification.EngineId +
      "&ListedCar.ListedCarSpecification.TransmissionId=" + listing.ListedCar.ListedCarSpecification.TransmissionId +
      "&ListedCar.ListedCarSpecification.DrivetrainId=" + listing.ListedCar.ListedCarSpecification.DrivetrainId,
      listing && images);
  }

  DeleteListing(id: number){
    return this.apiRequests.delete("Listing/DeleteListing?id=" + id);
  }
}
