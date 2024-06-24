import {CarTypeDto} from "../Cars/CarTypeDto";
import {DoorQuantityDto} from "../Cars/DoorQuantityDto";
import {GenerationDto} from "../Cars/GenerationDto";
import {EngineDto} from "../Cars/EngineDto";
import {TransmissionDto} from "../Cars/TransmissionDto";
import {DrivetrainDto} from "../Cars/DrivetrainDto";

export class ListedCarSpecificationDto{

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
