import {CountryDto} from "../Address/CountryDto";
import {CarColorDto} from "./CarColorDto";
import {CarTypeDto} from "./CarTypeDto";
import {FuelTypeDto} from "./FuelTypeDto";
import {DoorQuantityDto} from "./DoorQuantityDto";
import {TransmissionDto} from "./TransmissionDto";
import {CarConditionDto} from "./CarConditionDto";
import {ManufacturerDto} from "./ManufacturerDto";
import {DrivetrainDto} from "./DrivetrainDto";

export class GetBasicPropertiesDto {
  Id?: number;

  Country?: CountryDto[];

  CarColor?: CarColorDto[];

  CarType?: CarTypeDto[];

  FuelType?: FuelTypeDto[];

  DoorQuantity?: DoorQuantityDto[];

  Transmission?: TransmissionDto[];

  CarCondition?: CarConditionDto[];

  Manufacturer?: ManufacturerDto[];

  Drivetrain?: DrivetrainDto[];
}
