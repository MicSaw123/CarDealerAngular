import {GetIdentifiedVehiclesDto} from "../GetListingsDto/GetIdentifiedVehiclesDto";
import {GetListedCarsDto} from "../GetListingsDto/GetListedCarsDto";
import {ImageDto} from "../../Image/ImageDto";

export class FilterListingsDto {
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
