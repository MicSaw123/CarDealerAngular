import {AddIdentifiedVehiclesDto} from "./AddIdentifiedVehiclesDto";
import {AddListedCarDto} from "./AddListedCarDto";

export class AddListingDto{
  Id?: number;

  Title = '';

  Description = '';

  SellerId = 0;

  IdentifiedVehicles = new AddIdentifiedVehiclesDto();

  ListedCar = new AddListedCarDto();

  Images: Uint8Array[] = [];

  Price?: number;
}
