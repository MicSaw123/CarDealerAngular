import {CountryDto} from "./CountryDto";

export class CityDto {
  Id?: number;

  Name?: string;

  ZipCode?: string;

  CountryId?: number;

  Country?: CountryDto;
}
