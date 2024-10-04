import { Component, OnInit } from '@angular/core';
import {ListingApiService} from "../../CarDealerAngular.ApiHandlers/Listings/ListingApi.service";
import {SuccessResponse} from "../../Responses/SuccessResponse";
import {GetListingsDto} from "../../DataTransferObjects/Listing/GetListingsDto/GetListingsDto";
import {AuthGuardService} from "../../Services/AuthGuardService";
import {ErrorResponse} from "../../Responses/ErrorResponse";
import { Router } from '@angular/router';
import {IdentityApiService} from "../../CarDealerAngular.ApiHandlers/Identity/IdentityApi.service";
import {UserInfoDto} from "../../DataTransferObjects/Identity/UserInfoDto";

@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.component.html',
  styleUrls: ['./profile-management.component.css']
})
export class ProfileManagementComponent implements OnInit{
  listings: GetListingsDto[] = [];
  userInfo: UserInfoDto = new UserInfoDto();
  sellerId = 0;
  inactiveListings: GetListingsDto[] = [];
  activeListings: GetListingsDto[] = [];
  isActive = 0;
  header = '';

  constructor(private listingService: ListingApiService,
              private authGuardService: AuthGuardService,
              private router: Router,
              private identityService: IdentityApiService) {
  }

  ngOnInit() {
    this.sellerId = this.authGuardService.decodeToken();
    this.listingService.GetListingsBySellerId(this.sellerId).subscribe({
      next: (response: SuccessResponse<GetListingsDto[]>) =>{
        this.handleGetListings(response)
      },
      error: (response: ErrorResponse) =>{
        console.log(response)
      }
    });
    const id = this.authGuardService.decodeToken();
    this.identityService.GetUserInfoById(id).subscribe({
      next: (response: SuccessResponse<UserInfoDto>) =>{
        this.handleGetUserInfo(response)
      },
      error: (response: ErrorResponse) =>{
        console.log(response)
      }
    })
  }

  navigateToUpdateListing(id: number){
    this.router.navigate(['/update-listing', id]);
  }

  handleGetUserInfo(response: SuccessResponse<UserInfoDto>){
    this.userInfo = response.Result;
  }

  handleGetListings(response: SuccessResponse<GetListingsDto[]>){
    this.listings = response.Result;
    for(let i = 0; i < this.listings.length; i++){
      if(this.listings[i].IsActive){
        this.activeListings.push(this.listings[i]);
      }
      else{
        this.inactiveListings.push(this.listings[i]);
      }
    }
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
