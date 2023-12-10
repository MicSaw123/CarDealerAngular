import {Engine} from "./Engine";
import {Transmission} from "./Transmission";

export class CarSpecification{
  id?: number;

  engineId?: number;

  transmissionId?: number;

  engine?: Engine;

  transmission?: Transmission;
}
