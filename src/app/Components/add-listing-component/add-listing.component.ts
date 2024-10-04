import {ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {ModelApiService} from "../../CarDealerAngular.ApiHandlers/Cars/ModelApi.service";
import {GenerationApiService} from "../../CarDealerAngular.ApiHandlers/Cars/GenerationApi.service";
import {SuccessResponse} from "../../Responses/SuccessResponse";
import {ErrorResponse} from "../../Responses/ErrorResponse";
import {FormControl, FormGroup, Validators } from '@angular/forms';
import {EngineApiService} from "../../CarDealerAngular.ApiHandlers/Cars/EngineApi.service";
import {ListingApiService} from "../../CarDealerAngular.ApiHandlers/Listings/ListingApi.service";
import {AuthGuardService} from "../../Services/AuthGuardService";
import {GetBasicPropertiesDto} from "../../DataTransferObjects/Cars/GetBasicPropertiesDto";
import {EngineDto} from "../../DataTransferObjects/Cars/EngineDto";
import {ModelDto} from "../../DataTransferObjects/Cars/ModelDto";
import {GenerationDto} from "../../DataTransferObjects/Cars/GenerationDto";
import {AddListingDto} from "../../DataTransferObjects/Listing/AddListingsDtos/AddListingDto";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-listing-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit{
  listingDto = new AddListingDto();
  images: File[] = [];
  manufacturerId = 0;
  modelId = 0;
  fuelTypeId = 0;
  basicProperties: GetBasicPropertiesDto = new GetBasicPropertiesDto();
  models: ModelDto[] = [];
  generations: GenerationDto[] = [];
  engines: EngineDto[] = [];
  addListingForm: FormGroup;

  constructor(private modelService: ModelApiService,
              private generationService: GenerationApiService,
              private engineService: EngineApiService,
              private listingService: ListingApiService,
              private authGuardService: AuthGuardService,
              private activatedRoute: ActivatedRoute)
  {
    this.addListingForm = new FormGroup({
      'Condition': new FormControl(null),
      'Manufacturer': new FormControl(null),
      'Model': new FormControl(null),
      'Generation': new FormControl(null),
      'CarType': new FormControl(null),
      'DoorQuantity': new FormControl(null),
      'FuelType': new FormControl(null),
      'Transmission': new FormControl(null),
      'Drivetrain': new FormControl(null),
      'CarColor': new FormControl(null),
      'ProductionDate': new FormControl(null),
      'FirstRegistrationDate': new FormControl(null),
      'CountryOfOrigin': new FormControl(null),
      'Title': new FormControl(null),
      'Description': new FormControl(null),
      'Vin': new FormControl(null),
      'LicensePlate': new FormControl(null),
      'PreviousOwners': new FormControl(null),
      'Mileage': new FormControl(null),
      'Engine': new FormControl(null),
      'PreviouslyDamaged': new FormControl(null),
      'Images': new FormControl(null, [Validators.minLength(2)]),
      'Price': new FormControl(null)
    });
  }

  ngOnInit() {
    this.authGuardService.decodeToken();
    this.activatedRoute.data.subscribe((data) =>{
      this.basicProperties = data['basicProperties'].Result;
    });
    this.engineService.GetEngines().subscribe({
      next: (response: SuccessResponse<EngineDto[]>) => {
        this.handleGetEngines(response)
      },
      error: (response: ErrorResponse) =>{
        console.log(response)
      }
    });
  }

  onFileSelect(event: any) {
    if (event.target.files) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.images.push(event.target.files[i]);
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onload = (event) => {
          let x = event.target?.result as string;
          let y: unknown = x.split(',')[1];
          this.listingDto.Images.push(y as Uint8Array);
          console.log(this.listingDto.Images);
        }
      }
    }
  }


  getImageUrl(image: File): string{
    return window.URL.createObjectURL(image);
  }

  addListing(){
    this.listingDto.SellerId  = this.authGuardService.decodeToken();
    console.log(this.listingDto);
    this.listingService.PostListing(this.listingDto).subscribe({
      next: (response: SuccessResponse<null>) =>{
        this.handlePostListing(response)
      },
      error: (response: ErrorResponse) => {
        console.log(response);
      }
    })
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

  private handleGetGenerationsByModelId(response: SuccessResponse<GenerationDto[]>) {
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
