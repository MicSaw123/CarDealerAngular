import {ListedCarDto} from "./ListedCarDto";
import {IdentifiedVehiclesDto} from "./IdentifiedVehiclesDto";

export class ListingDto{
  Id = 0;

  SellerId = 0;

  Title: string = '';

  Description: string = '';

  ListedCar = new ListedCarDto();

  IdentifiedVehicles = new IdentifiedVehiclesDto();
}
