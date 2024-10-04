import {Component, OnInit} from '@angular/core';
import {ModelApiService} from "../../CarDealerAngular.ApiHandlers/Cars/ModelApi.service";
import {FormControl, FormGroup} from "@angular/forms";
import {GenerationApiService} from "../../CarDealerAngular.ApiHandlers/Cars/GenerationApi.service";
import {SuccessResponse} from "../../Responses/SuccessResponse";
import {ErrorResponse} from "../../Responses/ErrorResponse";
import {EngineApiService} from "../../CarDealerAngular.ApiHandlers/Cars/EngineApi.service";
import {ModelDto} from "../../DataTransferObjects/Cars/ModelDto";
import {GetBasicPropertiesApiService} from "../../CarDealerAngular.ApiHandlers/GetBasicProperties/GetBasicPropertiesApi.service";
import {GetBasicPropertiesDto} from "../../DataTransferObjects/Cars/GetBasicPropertiesDto";
import {GenerationDto} from "../../DataTransferObjects/Cars/GenerationDto";
import {EngineDto} from "../../DataTransferObjects/Cars/EngineDto";
import {GetListingsDto} from "../../DataTransferObjects/Listing/GetListingsDto/GetListingsDto";
import {ListingApiService} from "../../CarDealerAngular.ApiHandlers/Listings/ListingApi.service";
import {ListingsSearchConditions} from "../../DataTransferObjects/Listing/ListingsSearchConditions";
import {AccountTypeApiService} from "../../CarDealerAngular.ApiHandlers/Identity/AccountTypeApi.service";
import {AccountTypeDto} from "../../DataTransferObjects/Identity/AccountTypeDto";

@Component({
  selector: 'app-search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  manufacturerId = 0;
  modelId = 0;
  carTypeId = 0;
  fuelTypeId = 0;
  carConditionId = 0;
  carColorId = 0;
  doorQuantityId = 0;
  countryOfOriginId = 0;
  cylinderId = 0;
  generationId = 0;
  accountTypeId = 0;
  keywords = '';
  transmissionId = 0;
  minMileage = 0;
  maxMileage = 0;
  minPrice = 0;
  maxPrice = 0;
  minYearOfProduction = 0;
  maxYearOfProduction = 0;
  minDisplacement = 0;
  maxDisplacement = 0;
  minimumHorsepower = 0;
  maximumHorsepower = 0;
  drivetrainId = 0;
  sortingId = 0;

  basicProperties = new GetBasicPropertiesDto;
  models: ModelDto[] = [];
  generations: GenerationDto[] = [];
  searchForm: FormGroup;
  engines: EngineDto[] = [];
  accountTypes: AccountTypeDto[] = [];
  filteredListings: GetListingsDto[] = [];
  listingsSearchConditions = new ListingsSearchConditions();

  constructor(private modelService: ModelApiService,
              private generationService: GenerationApiService,
              private engineService: EngineApiService,
              private getBasicPropertiesApiService: GetBasicPropertiesApiService,
              private listingsService: ListingApiService,
              private accountTypeService: AccountTypeApiService)
  {
    this.searchForm = new FormGroup({
      'manufacturer': new FormControl(null),
      'model': new FormControl(null),
      'generation': new FormControl(null),
      'transmission': new FormControl(null),
      'fuelType': new FormControl(null),
      'carType': new FormControl(null),
      'keywords': new FormControl(null),
      'minDisplacement': new FormControl(null),
      'maxDisplacement': new FormControl(null),
      'minYearOfProduction': new FormControl(null),
      'maxYearOfProduction': new FormControl(null),
      'cylinders': new FormControl(null),
      'carColor': new FormControl(null),
      'carCondition': new FormControl(null),
      'drivetrain': new FormControl(null),
      'doorQuantity': new FormControl(null),
      'countryOfOrigin': new FormControl(null),
      'minimumHorsepower': new FormControl(null),
      'maximumHorsepower': new FormControl(null),
      'accountType': new FormControl(null),
      'minPrice': new FormControl(null),
      'maxPrice': new FormControl(null),
      'minMileage': new FormControl(null),
      'maxMileage': new FormControl(null),
    });
  }

  ngOnInit() {
    this.getBasicPropertiesApiService.GetBasicProperties().subscribe({
      next: (response: SuccessResponse<GetBasicPropertiesDto>) =>{
        this.handleGetBasicProperties(response)
      },
      error: (response: ErrorResponse) => {
        console.log(response)
    }
    })
     this.engineService.GetEngines().subscribe({
       next: (response: SuccessResponse<EngineDto[]>) =>
       {
         this.handleGetEngines(response)
       },
     error:(response: ErrorResponse) =>
     {
       console.log(response)
     }}
     );
    this.accountTypeService.GetAccountTypes().subscribe({
      next: (response: SuccessResponse<AccountTypeDto[]>) =>{
        this.handleGetAccountTypes(response)
      },
      error:(response: ErrorResponse) =>{
        console.log(response)
      }
    })
  }

  filterListings(){
    this.listingsSearchConditions = {
      KeyWords: this.keywords,
      ManufacturerId: this.manufacturerId,
      ModelId: this.modelId,
      GenerationId: this.generationId,
      TransmissionId: this.transmissionId,
      FuelTypeId: this.fuelTypeId,
      CarTypeId: this.carTypeId,
      MinDisplacement: this.minDisplacement,
      MaxDisplacement: this.maxDisplacement,
      MinHorsepower: this.minimumHorsepower,
      MaxHorsepower: this.maximumHorsepower,
      MinYearOfProduction: this.minYearOfProduction,
      MaxYearOfProduction: this.maxYearOfProduction,
      DrivetrainId: this.drivetrainId,
      CarColorId: this.carColorId,
      CarConditionId: this.carConditionId,
      CountryOfOriginId: this.countryOfOriginId,
      DoorQuantityId: this.doorQuantityId,
      MinMileage: this.minMileage,
      MaxMileage: this.maxMileage,
      MinPrice: this.minPrice,
      MaxPrice: this.maxPrice
    }
    this.listingsService.FilterListings(this.sortingId ,this.listingsSearchConditions).subscribe({
      next: (response: SuccessResponse<GetListingsDto[]>) =>{
        this.handleGetFilteredListings(response)
      },
      error:(response: ErrorResponse) =>{
        console.log(response)
      }
    })
  }

  private handleGetFilteredListings(response: SuccessResponse<GetListingsDto[]>){
    this.filteredListings = response.Result;
  }

  private handleGetBasicProperties(response: SuccessResponse<GetBasicPropertiesDto>){
    this.basicProperties = response.Result;
  }

  private handleGetAccountTypes(response: SuccessResponse<AccountTypeDto[]>){
    this.accountTypes = response.Result;
  }

  private handleGetEngines(response: SuccessResponse<EngineDto[]>) {
    this.engines = response.Result;
  }

  private handleGetModelsByManufacturerId(response: SuccessResponse<ModelDto[]>){
    this.models = response.Result;
  }

  private handleGetGenerationsByModelId(response: SuccessResponse<GenerationDto[]>){
    this.generations = response.Result;
  }

  onSelectedManufacturer(manufacturerId: number){
    if(manufacturerId != 0) {
      this.modelService.GetModelsByManufacturerId(manufacturerId).subscribe({
        next: (response) => {
          this.handleGetModelsByManufacturerId(response)
        },
        error: (response: ErrorResponse) => {
          console.log(response);
          new ErrorResponse(404, "Unknown Error")
        }
      });
    }
    else{
      this.manufacturerId = 0;
    }
    this.searchForm.get('model')?.reset();
    this.modelId = 0;
    this.searchForm.get('generation')?.disabled;
  }

  onSelectedModel(modelId: number){
    if(modelId != 0) {
      this.generationService.GetGenerationsByModelId(modelId).subscribe({
        next: (response) => {
          this.handleGetGenerationsByModelId(response)
        },
        error: (response: ErrorResponse) => {
          console.log(response);
          new ErrorResponse(404, "Unknown Error")
        }
      });
    }
    else{
      this.modelId = 0;
    }
    this.generationId = 0;
    this.searchForm.get('generation')?.reset();
  }
}
