import {TransmissionDto} from "../../Cars/TransmissionDto";
import {FuelTypeDto} from "../../Cars/FuelTypeDto";

export class FilterListedCarSpecifications {
  TransmissionId?: number;

  Transmission?: TransmissionDto;

  FuelTypeId?: number;

  FuelType?: FuelTypeDto;
}
