import {CarType} from "./CarType";
import {Generation} from "./Generation";
import {CarSpecification} from "./CarSpecification";

export class Car{
  Id?: number;

  GenerationId?: number;

  CarSpecificationId?: number;

  CarTypeId?: number;

  CarType?: CarType;

  Generation?: Generation;

  CarSpecification?: CarSpecification;
}
