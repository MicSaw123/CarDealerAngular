import {PreviouslyDamagedDto} from "../../Cars/PreviouslyDamagedDto";
import {CountryDto} from "../../Address/CountryDto";

export class FilterIdentifiedVehiclesDto{
  PreviouslyDamagedId?: number;

  PreviouslyDamaged?: PreviouslyDamagedDto;

  CountryOfOriginId?: number;

  CountryOfOrigin?: CountryDto;
}
