import { Component, Input } from '@angular/core';
import {GetListingsDto} from "../../../../DataTransferObjects/Listing/GetListingsDto/GetListingsDto";
import {ListingApiService} from "../../../../CarDealerAngular.ApiHandlers/Listings/ListingApi.service";
import { Router } from '@angular/router';
import {SuccessResponse} from "../../../../Responses/SuccessResponse";
import {ErrorResponse} from "../../../../Responses/ErrorResponse";

@Component({
  selector: 'app-inactive-listings',
  templateUrl: './inactive-listings.component.html',
  styleUrls: ['./inactive-listings.component.css']
})
export class InactiveListingsComponent {
  @Input() listings: GetListingsDto[] = [];

  constructor(private listingService: ListingApiService,
              private router: Router) {
  }

  navigateToUpdateListing(id: number){
    this.router.navigate(['/update-listing', id]);
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
