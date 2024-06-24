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
  basicProperties = new GetBasicPropertiesDto;
  models: ModelDto[] = [];
  generations: GenerationDto[] = [];
  searchForm: FormGroup;
  engines: EngineDto[] = [];

  constructor(private modelService: ModelApiService,
              private generationService: GenerationApiService,
              private engineService: EngineApiService,
              private getBasicPropertiesApiService: GetBasicPropertiesApiService,)
  {
    this.searchForm = new FormGroup({
      'manufacturer': new FormControl(null),
      'model': new FormControl(null),
      'generation': new FormControl(null),
      'transmission': new FormControl(null),
      'fuelType': new FormControl(null),
      'carType': new FormControl(null),
      'description': new FormControl(null),
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
      'engineName': new FormControl(null)
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
         this.handleGetEngines(response)},
     error:(response: ErrorResponse) =>{console.log(response)}}
     );
  }

  private handleGetBasicProperties(response: SuccessResponse<GetBasicPropertiesDto>){
    this.basicProperties = response.Result;
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
    this.modelService.GetModelsByManufacturerId(manufacturerId).subscribe({
      next:(response) => this.handleGetModelsByManufacturerId(response),
      error:(response: ErrorResponse) => {console.log(response); new ErrorResponse(404, "Unknown Error")}
    });
    this.searchForm.get('model')?.reset();
  }

  onSelectedModel(modelId: number){
    this.generationService.GetGenerationsByModelId(modelId).subscribe({
      next:(response) => this.handleGetGenerationsByModelId(response),
      error:(response: ErrorResponse) => {console.log(response); new ErrorResponse(404, "Unknown Error")}
    });
    this.searchForm.get('generation')?.reset();
  }
}
