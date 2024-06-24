import {ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {ModelApiService} from "../../CarDealerAngular.ApiHandlers/Cars/ModelApi.service";
import {GenerationApiService} from "../../CarDealerAngular.ApiHandlers/Cars/GenerationApi.service";
import {SuccessResponse} from "../../Responses/SuccessResponse";
import {ErrorResponse} from "../../Responses/ErrorResponse";
import {FormControl, FormGroup } from '@angular/forms';
import {EngineApiService} from "../../CarDealerAngular.ApiHandlers/Cars/EngineApi.service";
import {ListingApiService} from "../../CarDealerAngular.ApiHandlers/Listings/ListingApi.service";
import {ListingDto} from "../../DataTransferObjects/Listing/ListingDto";
import {PreviouslyDamagedApiService} from "../../CarDealerAngular.ApiHandlers/Cars/PreviouslyDamagedApi.service";
import {AuthGuardService} from "../../Services/AuthGuardService";
import {PreviouslyDamagedDto} from "../../DataTransferObjects/Cars/PreviouslyDamagedDto";
import {GetBasicPropertiesDto} from "../../DataTransferObjects/Cars/GetBasicPropertiesDto";
import {EngineDto} from "../../DataTransferObjects/Cars/EngineDto";
import {ModelDto} from "../../DataTransferObjects/Cars/ModelDto";
import {GenerationDto} from "../../DataTransferObjects/Cars/GenerationDto";
import {
  GetBasicPropertiesApiService
} from "../../CarDealerAngular.ApiHandlers/GetBasicProperties/GetBasicPropertiesApi.service";

@Component({
  selector: 'app-add-listing-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit{
  listing: ListingDto = new ListingDto();
  images: File[] = [];
  manufacturerId = 0;
  modelId = 0;
  fuelTypeId = 0;
  basicProperties?: GetBasicPropertiesDto;
  models: ModelDto[] = [];
  generations: GenerationDto[] = [];
  engines: EngineDto[] = [];
  previouslyDamaged: PreviouslyDamagedDto[] = [];
  addListingForm: FormGroup;

  constructor(private modelService: ModelApiService,
              private generationService: GenerationApiService,
              private engineService: EngineApiService,
              private listingService: ListingApiService,
              private previouslyDamagedService: PreviouslyDamagedApiService,
              private authGuardService: AuthGuardService,
              private getBasicPropertiesService: GetBasicPropertiesApiService)
  {
    this.addListingForm = new FormGroup({
      'condition': new FormControl(null),
      'manufacturer': new FormControl(null),
      'model': new FormControl(null),
      'generation': new FormControl(null),
      'carType': new FormControl(null),
      'doorQuantity': new FormControl(null),
      'fuelType': new FormControl(null),
      'transmission': new FormControl(null),
      'drivetrain': new FormControl(null),
      'carColor': new FormControl(null),
      'productionDate': new FormControl(null),
      'firstRegistrationDate': new FormControl(null),
      'countryOfOrigin': new FormControl(null),
      'title': new FormControl(null),
      'description': new FormControl(null),
      'vin': new FormControl(null),
      'licensePlate': new FormControl(null),
      'previousOwners': new FormControl(null),
      'mileage': new FormControl(null),
      'engine': new FormControl(null),
      'previouslyDamaged': new FormControl(null),
      'images': new FormControl(null)
    });
  }

  ngOnInit() {
    this.authGuardService.decodeToken();
    this.getBasicPropertiesService.GetBasicProperties().subscribe({
      next: (response: SuccessResponse<GetBasicPropertiesDto>) =>{
        this.handleGetBasicProperties(response)
    },
      error: (response: ErrorResponse) => {
        console.log(response)
      }
    });
    this.engineService.GetEngines().subscribe({
      next: (response: SuccessResponse<EngineDto[]>) => {
        this.handleGetEngines(response)
      },
      error: (response: ErrorResponse) =>{
        console.log(response)
      }
    });
    this.previouslyDamagedService.GetPreviouslyDamaged().subscribe({
      next: (response: SuccessResponse<PreviouslyDamagedDto[]>) =>{
        this.handleGetPreviouslyDamaged(response)
      },
      error: (response: ErrorResponse) => {
        console.log(response)
      }
    });
  }

  onFileSelect(event: any){
    if(event.target.files){
      for(let i = 0; i < event.target.files.length; i++){
        this.images.push(event.target.files[i]);
      }
    }
    console.log(this.listing);
  }

  getImageUrl(image: File): string{
    return window.URL.createObjectURL(image);
  }

  addListing(listingDto: ListingDto){
    const formData = new FormData();
    for(let i = 0; i < this.images.length; i++){
      formData.append('images', this.images[i]);
    }
    this.listing.SellerId  = this.authGuardService.decodeToken();
    listingDto = this.listing;
    console.log(JSON.stringify(listingDto));
    this.listingService.PostListing(listingDto, formData).subscribe({
      next: (response: SuccessResponse<null>) =>{
        this.handlePostListing(response)
      },
      error: (response: ErrorResponse) => {
        console.log(response);
      }
    })
  }

  private handleGetPreviouslyDamaged(response: SuccessResponse<PreviouslyDamagedDto[]>){
    this.previouslyDamaged = response.Result;
  }

  private handleGetBasicProperties(response: SuccessResponse<GetBasicPropertiesDto>){
    this.basicProperties = response.Result;
  }

  private handlePostListing(response: SuccessResponse<null>){
    const success = response.IsSuccessful;
  }

  private handleGetEngines(response: SuccessResponse<EngineDto[]>){
    this.engines = response.Result;
  }

  private handleGetModelsByManufacturerId(response: SuccessResponse<ModelDto[]>) {
    this.models = response.Result;
  }

  private  handleGetGenerationsByModelId(response: SuccessResponse<GenerationDto[]>) {
    this.generations = response.Result;
  }

  onSelectedManufacturer(manufacturerId: number) {
    this.modelService.GetModelsByManufacturerId(manufacturerId).subscribe({
      next: (response) => this.handleGetModelsByManufacturerId(response),
      error: (response: ErrorResponse) => {
        console.log(response);
        new ErrorResponse(404, "Unknown Error")
      }
    });
    this.addListingForm.get('model')?.reset();
  }

  onSelectedModel(modelId: number) {
    this.generationService.GetGenerationsByModelId(modelId).subscribe({
      next: (response) => this.handleGetGenerationsByModelId(response),
      error: (response: ErrorResponse) => {
        console.log(response);
        new ErrorResponse(404, "Unknown Error")
      }
    });
    this.addListingForm.get('generation')?.reset();
  }
}
