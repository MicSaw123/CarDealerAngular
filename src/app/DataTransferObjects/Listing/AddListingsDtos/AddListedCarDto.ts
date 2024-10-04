import {AddListedCarSpecificationDto} from "./AddListedCarSpecificationDto";

export class AddListedCarDto {
  Id?: number;

  LicensePlate= '';

  PreviousOwners = 0;

  CarConditionId = 0;

  Mileage = 0;

  CarColorId = 0;

  ListedCarSpecification = new AddListedCarSpecificationDto();
}
