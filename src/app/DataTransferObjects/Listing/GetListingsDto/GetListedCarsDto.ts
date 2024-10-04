import {CarColorDto} from "../../Cars/CarColorDto";
import {CarConditionDto} from "../../Cars/CarConditionDto";
import {GetListedCarSpecificationsDto} from "./GetListedCarSpecificationsDto";

export class GetListedCarsDto{
  Id = 0;

  LicensePlate = '';

  PreviousOwners = 0;

  CarConditionId = 0;

  Mileage = 0;

  CarColorId = 0;

  CarColor = new CarColorDto();

  CarCondition = new CarConditionDto();

  ListedCarSpecification = new GetListedCarSpecificationsDto();
}
