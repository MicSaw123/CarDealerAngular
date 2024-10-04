import { Component, Input } from '@angular/core';
import {GetListingsDto} from "../../../DataTransferObjects/Listing/GetListingsDto/GetListingsDto";
import { Router } from '@angular/router';
import {SuccessResponse} from "../../../Responses/SuccessResponse";
import {ErrorResponse} from "../../../Responses/ErrorResponse";
import {ListingApiService} from "../../../CarDealerAngular.ApiHandlers/Listings/ListingApi.service";

@Component({
  selector: 'app-manage-listings',
  templateUrl: './manage-listings.component.html',
  styleUrls: ['./manage-listings.component.css']
})
export class ManageListingsComponent {
  @Input() listings: GetListingsDto[] = [];
  @Input() isActive: boolean = true;

  constructor(private router: Router,
              private listingService: ListingApiService) {
  }

  navigateToUpdateListing(id: number){
    this.router.navigate(['/update-listing', id]);
  }

  deleteListing(id: number) {
    this.listingService.DeleteListing(id).subscribe({
      next: (response: SuccessResponse<any>) => {
        console.log(response)
      },
      error: (response: ErrorResponse) => {
        console.log(response)
      }
    });
  }

  changeListingStatus(id: number, status: boolean) {
    this.listingService.ChangeListingStatus(id, status).subscribe({
      next: (response: SuccessResponse<any>) => {
        console.log(response)
      },
      error: (response: ErrorResponse) => {
        console.log(response)
      }
    })
  }

}
