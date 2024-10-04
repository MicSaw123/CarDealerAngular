import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import {ImageDto} from "../../../../DataTransferObjects/Image/ImageDto";
import {ListingApiService} from "../../../../CarDealerAngular.ApiHandlers/Listings/ListingApi.service";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {
  @Input() title = '';
  @Input() productionDate = '';
  @Input() images?: ImageDto[];
  @Input() id?: number;
  @Input() mileage?: number;
  @Input() horsepower?: number;
  @Input() displacement?: number;
  @Input() fuelType?: number;
  @Input() carCondition?: string;
  @Input() dateOfCreation?: string;

  constructor(private router: Router,
              private listingsApiService: ListingApiService) {
  }

  onSelect(id: number){
    this.router.navigate(['/listing', id]);
  }

}
