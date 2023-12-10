import {FuelType} from "./FuelType";
export class Engine{
  Id?: number;

  Displacement?: number;

  Cylinders?: number;

  FuelTypeId?: number;

  Name: string = '';

  FuelType?: FuelType;
}
