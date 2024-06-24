import { Component, OnInit } from '@angular/core';
import {ListingApiService} from "../../../CarDealerAngular.ApiHandlers/Listings/ListingApi.service";
import {SuccessResponse} from "../../../Responses/SuccessResponse";
import {GetListingsDto} from "../../../DataTransferObjects/Listing/GetListingsDto/GetListingsDto";
import {AuthGuardService} from "../../../Services/AuthGuardService";
import {ErrorResponse} from "../../../Responses/ErrorResponse";

@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.component.html',
  styleUrls: ['./profile-management.component.css']
})
export class ProfileManagementComponent implements OnInit{
  listings: GetListingsDto[] = [];
  sellerId = 0;

  constructor(private listingService: ListingApiService,
              private authGuardService: AuthGuardService) {
  }

  ngOnInit() {
    this.sellerId = this.authGuardService.decodeToken();
    this.listingService.GetListingsBySellerId(this.sellerId).subscribe({
      next: (response: SuccessResponse<GetListingsDto[]>) =>{
        this.handleGetListings(response)
        console.log(this.listings)
      },
      error: (response: ErrorResponse) =>{
        console.log(response)
      }
    })
  }

  handleGetListings(response: SuccessResponse<GetListingsDto[]>){
    this.listings = response.Result;
  }

  deleteListing(id: number){
    this.listingService.DeleteListing(id).subscribe({
      next: (response: SuccessResponse<any>) => {
        console.log(response)
      },
      error: (response: ErrorResponse) => {
        console.log(response)
      }
    });
  }
}
