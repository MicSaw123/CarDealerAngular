import {FuelTypeDto} from "./FuelTypeDto";

export class EngineDto {
  Id?: number;

  Name?: string;

  Cylinders?: number;

  Displacement?: number;

  Horsepower?: number;

  Torque?: number;

  FuelTypeId?: number;

  FuelType = new FuelTypeDto();
}
