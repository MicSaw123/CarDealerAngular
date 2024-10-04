import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import {Injectable} from "@angular/core";
import { Observable} from "rxjs";
import {ListingApiService} from "../CarDealerAngular.ApiHandlers/Listings/ListingApi.service";
import {GetListingsDto} from "../DataTransferObjects/Listing/GetListingsDto/GetListingsDto";

@Injectable()

export class GetListingDtoResolver implements Resolve<GetListingsDto> {
  constructor(private listingService: ListingApiService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GetListingsDto>{
    return this.listingService.GetListingById(route.params['id']);
  }
}
