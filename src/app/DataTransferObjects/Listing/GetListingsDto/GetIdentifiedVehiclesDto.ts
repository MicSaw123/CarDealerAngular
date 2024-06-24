import {CountryDto} from "../../Address/CountryDto";
import {PreviouslyDamagedDto} from "../../Cars/PreviouslyDamagedDto";

export class GetIdentifiedVehiclesDto {
  Id = 0;

  Vin = '';

  ProductionDate = '';

  FirstRegistrationDate = '';

  CountryId = 0;

  PreviouslyDamagedId = 0;

  CountryOfOrigin = new CountryDto();

  PreviouslyDamaged = new PreviouslyDamagedDto();
}
