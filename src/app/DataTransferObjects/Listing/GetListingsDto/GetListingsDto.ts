import {GetIdentifiedVehiclesDto} from "./GetIdentifiedVehiclesDto";
import {GetListedCarsDto} from "./GetListedCarsDto";
import {ImageDto} from "../../Image/ImageDto";

export class GetListingsDto{
  Id = 0;

  SellerId = 0;

  Title = '';

  Description = '';

  IsActive: boolean = false;

  DateOfCreation: Date = new Date();

  IdentifiedVehicles = new GetIdentifiedVehiclesDto();

  ListedCar = new GetListedCarsDto();

  Images: ImageDto[] = [];
}
