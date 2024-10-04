import {DrivetrainDto} from "../../Cars/DrivetrainDto";
import {TransmissionDto} from "../../Cars/TransmissionDto";
import {EngineDto} from "../../Cars/EngineDto";
import {GenerationDto} from "../../Cars/GenerationDto";
import {DoorQuantityDto} from "../../Cars/DoorQuantityDto";
import {CarTypeDto} from "../../Cars/CarTypeDto";

export class GetListedCarSpecificationsDto {
  Id = 0;

  CarTypeId = 0;

  DoorQuantityId = 0;

  GenerationId = 0;

  EngineId = 0;

  TransmissionId = 0;

  DrivetrainId = 0;

  CarType = new CarTypeDto();

  DoorQuantity = new DoorQuantityDto();

  Generation = new GenerationDto();

  Engine = new EngineDto();

  Transmission = new TransmissionDto();

  Drivetrain = new DrivetrainDto();
}
