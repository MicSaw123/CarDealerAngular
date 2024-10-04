import {ListedCarSpecificationDto} from "./ListedCarSpecificationDto";

export class ListedCarDto{
  Id = 0;

  LicensePlate: string = '';

  PreviousOwners = 0;

  CarConditionId = 0;

  Mileage = 0;

  CarColorId = 0;

  ListedCarSpecification: ListedCarSpecificationDto = new ListedCarSpecificationDto();
}
