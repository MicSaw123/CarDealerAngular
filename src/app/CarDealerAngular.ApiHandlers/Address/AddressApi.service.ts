import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment.development";
import {BaseApiRequestsService} from "../GenericApiService/BaseApiRequests.service";
import {SuccessResponse} from "../../Responses/SuccessResponse";
import {CountryDto} from "../../DataTransferObjects/Address/CountryDto";
import {CityDto} from "../../DataTransferObjects/Address/CityDto";

@Injectable()

export class AddressApiService{
  apiUrl = environment.apiUrl;

  constructor(private apiRequests: BaseApiRequestsService) {
  }

  GetCountries(){
    return this.apiRequests.get<SuccessResponse<CountryDto[]>>("Address/Countries");
  }

  GetCitiesByCountryId(countryId: number){
    return this.apiRequests.get<SuccessResponse<CityDto[]>>("Address/Cities?countryId=" + countryId);
  }

}
