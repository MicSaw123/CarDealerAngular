import { Component, Input, OnInit } from '@angular/core';
import {ListingApiService} from "../../CarDealerAngular.ApiHandlers/Listings/ListingApi.service";
import {SuccessResponse} from "../../Responses/SuccessResponse";
import {ErrorResponse} from "../../Responses/ErrorResponse";
import {GetListingsDto} from "../../DataTransferObjects/Listing/GetListingsDto/GetListingsDto";

@Component({
  selector: 'app-listing-component-list',
  templateUrl: './listing-list.component.html',
  styleUrls: ['./listing-list.component.css']
})
export class ListingListComponent implements OnInit{
  listings: GetListingsDto[] = [];
  @Input() filteredListings: GetListingsDto[] = [];

  constructor(private listingService: ListingApiService) {
  }

  ngOnInit(){
    this.listingService.GetListings().subscribe({
      next: (response: SuccessResponse<GetListingsDto[]>) =>{
        this.handleGetListings(response);
        },
      error: (response: ErrorResponse) =>{
        console.log(response)
      }
    });
  }


  handleGetListings(response: SuccessResponse<GetListingsDto[]>){
    this.listings = response.Result;
  }
}
