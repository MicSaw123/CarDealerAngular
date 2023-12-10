import {Component, OnInit} from '@angular/core';
import {Manufacturer} from "../Models/Manufacturer";
import {ManufacturerController} from "../CarDealerAngular.ApiHandlers/ManufacturerController";
import {Model} from "../Models/Model";
import {ModelApiService} from "../CarDealerAngular.ApiHandlers/ModelApi.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Generation} from "../Models/Generation";
import {GenerationApiService} from "../CarDealerAngular.ApiHandlers/GenerationApi.Service";
import {Transmission} from "../Models/Transmission";
import {TransmissionApiService} from "../CarDealerAngular.ApiHandlers/TransmissionApi.service";

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit{
  manufacturerId: number = 0;
  modelId: number = 0;
  minDisplacement?: number;
  maxDisplacement?: number;
  minYearOfProduction?: number;
  maxYearOfProduction?: number;
  models: Model[] = [];
  transmissions: Transmission[] = [];
  manufacturers: Manufacturer[] = [];
  generations: Generation[] = [];
  searchForm!: FormGroup;

  constructor(private manufacturerService: ManufacturerController,
              private modelService: ModelApiService,
              private generationService: GenerationApiService,
              private  transmissionService: TransmissionApiService) {
  }

  ngOnInit() {
    this.searchForm = new FormGroup({
      'manufacturer': new FormControl(null),
      'model': new FormControl(null),
      'generation': new FormControl(null),
      'transmission': new FormControl(null),
      'minDisplacement': new FormControl(null),
      'maxDisplacement': new FormControl(null),
      "minYearOfProduction": new FormControl(null),
      "maxYearOfProduction": new FormControl(null),
    });
    this.manufacturerService.GetManufacturers().subscribe({
      next:(response) => this.handleGetManufacturers(response)
    });
    this.transmissionService.getTransmissions().subscribe({
      next:(response) => this.handleGetTransmissions(response)
    });
  }

  onSelectedManufacturer(manufacturerId: number){
    this.modelService.getModelsByManufacturerId(manufacturerId).subscribe({
      next:(response) => this.handleGetModelsByManufacturerId(response)
    });
    this.searchForm.get('model')?.reset();
  }

  onSelectedModel(modelId: number){
    this.generationService.getGenerationsByModelId(modelId).subscribe({
      next:(response) => this.handleGetGenerationsByModelId(response)
    });
    this.searchForm.get('generation')?.reset();
  }


  private handleGetManufacturers(manufacturers: Manufacturer[]){
    this.manufacturers = manufacturers;
  }

  private handleGetTransmissions(transmissions: Transmission[]){
    this.transmissions = transmissions;
  }

  private handleGetModelsByManufacturerId(models: Model[]){
    this.models = models;
  }

  private handleGetGenerationsByModelId(generations: Generation[]){
    this.generations = generations;
  }
}
