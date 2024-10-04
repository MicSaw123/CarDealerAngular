import {CarConditionDto} from "../../Cars/CarConditionDto";
import {CarColorDto} from "../../Cars/CarColorDto";

export class FilterListedCarsDto{
  CarConditionId?: number;

  CarCondition?: CarConditionDto;

  CarColorId?: number;

  CarColor?: CarColorDto;
}
