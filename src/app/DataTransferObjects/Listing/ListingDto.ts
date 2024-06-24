import {ListedCarDto} from "./ListedCarDto";
import {IdentifiedVehiclesDto} from "./IdentifiedVehiclesDto";

export class ListingDto{
  SellerId = 0;

  Title: string = '';

  Description: string = '';

  ListedCar = new ListedCarDto();

  IdentifiedVehicles = new IdentifiedVehiclesDto();
}
