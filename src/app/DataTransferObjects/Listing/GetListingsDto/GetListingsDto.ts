import {GetIdentifiedVehiclesDto} from "./GetIdentifiedVehiclesDto";
import {GetListedCarsDto} from "./GetListedCarsDto";

export class GetListingsDto{
  Id = 0;

  SellerId = 0;

  Title = '';

  Description = '';

  IdentifiedVehicles = new GetIdentifiedVehiclesDto();

  ListedCar = new GetListedCarsDto();

  Images?: Uint8Array[];
}
