import {ListedCarSpecificationDto} from "./ListedCarSpecificationDto";

export class ListedCarDto{
  LicensePlate: string = '';

  PreviousOwners = 0;

  CarConditionId = 0;

  Mileage = 0;

  CarColorId = 0;

  ListedCarSpecification: ListedCarSpecificationDto = new ListedCarSpecificationDto();
}
