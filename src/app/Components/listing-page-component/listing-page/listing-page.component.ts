import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SuccessResponse} from "../../../Responses/SuccessResponse";
import {GetListingsDto} from "../../../DataTransferObjects/Listing/GetListingsDto/GetListingsDto";
import {ListingApiService} from "../../../CarDealerAngular.ApiHandlers/Listings/ListingApi.service";
import {ErrorResponse} from "../../../Responses/ErrorResponse";

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css']
})
export class ListingPageComponent {
  listingId?: number;
  listing = new GetListingsDto();

  constructor(private activatedRoute: ActivatedRoute,
              private listingService: ListingApiService) {
  }

  ngOnInit(){
    let id = parseInt(this.activatedRoute.snapshot.params['id']);
    this.listingId = id;
    this.listingService.GetListingById(id).subscribe({
      next: (response: SuccessResponse<GetListingsDto>) =>{
        this.handleGetListingsById(response)
        console.log(response)
      },
      error: (response: ErrorResponse) =>{
        console.log(response)
      }
    })
  }

  handleGetListingsById(response: SuccessResponse<GetListingsDto>){
    this.listing = response.Result;
  }
}
