import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {SuccessResponse} from "../../Responses/SuccessResponse";
import {ErrorResponse} from "../../Responses/ErrorResponse";
import {FormControl, FormGroup} from '@angular/forms';
import {ListingApiService} from "../../CarDealerAngular.ApiHandlers/Listings/ListingApi.service";
import {ListingDto} from "../../DataTransferObjects/Listing/ListingDto";
import {GetBasicPropertiesDto} from "../../DataTransferObjects/Cars/GetBasicPropertiesDto";
import {GetListingsDto} from "../../DataTransferObjects/Listing/GetListingsDto/GetListingsDto";
import { ActivatedRoute} from '@angular/router';
import {ListedCarDto} from "../../DataTransferObjects/Listing/ListedCarDto";
import {ListedCarSpecificationDto} from "../../DataTransferObjects/Listing/ListedCarSpecificationDto";
import {IdentifiedVehiclesDto} from "../../DataTransferObjects/Listing/IdentifiedVehiclesDto";
import {ImageApiService} from "../../CarDealerAngular.ApiHandlers/Listings/ImageApi.service";

@Component({
  selector: 'app-update-listing-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './update-listing.component.html',
  styleUrls: ['./update-listing.component.css'],
})
export class UpdateListingComponent implements OnInit{
  id = 0;
  title = '';
  listing: GetListingsDto = new GetListingsDto();
  listingToUpdate: ListingDto = new ListingDto();
  listedCar: ListedCarDto = new ListedCarDto();
  identifiedVehicles: IdentifiedVehiclesDto = new IdentifiedVehiclesDto();
  listedCarSpecification: ListedCarSpecificationDto = new ListedCarSpecificationDto();
  images: File[] = [];
  basicProperties?: GetBasicPropertiesDto;
  updateListingForm: FormGroup;
  imageName = '';
  isDisabled = false;

  constructor(private listingService: ListingApiService,
              private activatedRoute: ActivatedRoute,
              private imageService: ImageApiService)
  {
    this.updateListingForm = new FormGroup({
      'condition': new FormControl(this.listing.ListedCar.CarConditionId),
      'manufacturer': new FormControl(this.listing.ListedCar.ListedCarSpecification.Generation.Model.ManufacturerId),
      'model': new FormControl(this.listing.ListedCar.ListedCarSpecification.Generation.ModelId),
      'generation': new FormControl(this.listing.ListedCar.ListedCarSpecification.GenerationId),
      'carType': new FormControl(this.listing.ListedCar.ListedCarSpecification.CarTypeId),
      'doorQuantity': new FormControl(this.listing.ListedCar.ListedCarSpecification.DoorQuantityId),
      'fuelType': new FormControl(this.listing.ListedCar.ListedCarSpecification.Engine.FuelTypeId),
      'transmission': new FormControl(this.listing.ListedCar.ListedCarSpecification.TransmissionId),
      'drivetrain': new FormControl(this.listing.ListedCar.ListedCarSpecification.DrivetrainId),
      'carColor': new FormControl(this.listing.ListedCar.CarColorId),
      'productionDate': new FormControl(this.listing.IdentifiedVehicles.ProductionDate),
      'firstRegistrationDate': new FormControl(this.listing.IdentifiedVehicles.FirstRegistrationDate),
      'countryOfOrigin': new FormControl(this.listing.IdentifiedVehicles.CountryOfOriginId),
      'title': new FormControl(this.listing.Title),
      'description': new FormControl(this.listing.Description),
      'vin': new FormControl(this.listing.IdentifiedVehicles.Vin),
      'licensePlate': new FormControl(this.listing.ListedCar.LicensePlate),
      'previousOwners': new FormControl(this.listing.ListedCar.PreviousOwners),
      'mileage': new FormControl(this.listing.ListedCar.Mileage),
      'engine': new FormControl(this.listing.ListedCar.ListedCarSpecification.EngineId),
      'previouslyDamaged': new FormControl(this.listing.IdentifiedVehicles.PreviouslyDamagedId),
      'images': new FormControl(null)
    });
    this.updateListingForm.get('countryOfOrigin')?.disable();
    this.updateListingForm.get('manufacturer')?.disable();
    this.updateListingForm.get('model')?.disable();
    this.updateListingForm.get('generation')?.disable();
    this.updateListingForm.get('carType')?.disable();
    this.updateListingForm.get('doorQuantity')?.disable();
    this.updateListingForm.get('transmission')?.disable();
    this.updateListingForm.get('engine')?.disable();
    this.updateListingForm.get('previouslyDamaged')?.disable();
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) =>{
      this.basicProperties = data['basicProperties'].Result;
    });
    this.activatedRoute.data.subscribe((data) =>{
      this.listing = data['resolvedListing'].Result;
    });
    this.title = this.listing.Title;
    this.imageName = this.listing.Images[0].ImageName;
    console.log(this.imageName);
  }
  onFileSelect(event: any){
    if(event.target.files){
      for(let i = 0; i < event.target.files.length; i++){
        this.images.push(event.target.files[i]);
      }
    }
    let dirName = this.title + "_" + this.listing.Id;
    const formData = new FormData();
    for(let i = 0; i < this.images.length; i++){
      formData.append('images', this.images[i]);
    }
    this.imageService.UploadImagesToExistingFTPDirectory(formData, dirName).subscribe({
      next: (result) => {
        console.log(formData);
        console.log(result);
      },
      error: (response: ErrorResponse) =>{
        console.log(response);
      }
    })
  }


  onImageForward(){
    if(this.id >= this.listing.Images.length - 1){
      this.id = 0;
    }
    else{
      this.id += 1;
    }
  }

  onImageBackwards(){
    if(this.id <= 0){
      this.id = this.listing.Images.length - 1;
    }
    else{
      this.id -= 1;
    }
  }

  getImageUrl(image: File): string{
    return window.URL.createObjectURL(image);
  }

  deleteImage(imageName: string){
    this.imageService.DeleteImage(this.listing.Title + "_" + this.listing.Id, imageName).subscribe({
      next: (response: SuccessResponse<null>) => {
        console.log(response)
    },
      error: (response: ErrorResponse) =>{
        console.log(response)
      }
    })
  }

  updateListing(){
    this.listedCarSpecification ={
      Id: this.listing.ListedCar.ListedCarSpecification.Id,
      DoorQuantityId: this.listing.ListedCar.ListedCarSpecification.DoorQuantityId,
      DrivetrainId: this.listing.ListedCar.ListedCarSpecification.DrivetrainId,
      GenerationId: this.listing.ListedCar.ListedCarSpecification.GenerationId,
      EngineId: this.listing.ListedCar.ListedCarSpecification.EngineId,
      CarTypeId: this.listing.ListedCar.ListedCarSpecification.CarTypeId,
      TransmissionId: this.listing.ListedCar.ListedCarSpecification.TransmissionId
    }
    this.listedCar = {
      Id: this.listing.ListedCar.Id,
      PreviousOwners: this.listing.ListedCar.PreviousOwners,
      Mileage: this.listing.ListedCar.Mileage,
      LicensePlate: this.listing.ListedCar.LicensePlate,
      ListedCarSpecification: this.listedCarSpecification,
      CarColorId: this.listing.ListedCar.CarColorId,
      CarConditionId: this.listing.ListedCar.CarConditionId,
    }
    this.identifiedVehicles = {
      Id: this.listing.IdentifiedVehicles.Id,
      Vin: this.listing.IdentifiedVehicles.Vin,
      PreviouslyDamagedId: this.listing.IdentifiedVehicles.PreviouslyDamagedId,
      ProductionDate: this.listing.IdentifiedVehicles.ProductionDate,
      FirstRegistrationDate: this.listing.IdentifiedVehicles.FirstRegistrationDate,
      CountryOfOriginId: this.listing.IdentifiedVehicles.CountryOfOriginId
    }
    this.listingToUpdate = {
      Id: this.listing.Id,
      Title: this.listing.Title,
      Description: this.listing.Description,
      SellerId: this.listing.SellerId,
      ListedCar: this.listedCar,
      IdentifiedVehicles: this.identifiedVehicles
    }
    let listingForm = new FormData();
    listingForm.append("data", JSON.stringify(this.listingToUpdate));
    let dirName = this.title + "_" + this.listing.Id;
    this.listingService.UpdateListing(this.listingToUpdate, dirName).subscribe({
      next: (response: SuccessResponse<null>) =>{
        console.log(this.listingToUpdate)
      },
      error: (response: ErrorResponse) => {
        console.log(response)
      }
    })
  }
}
