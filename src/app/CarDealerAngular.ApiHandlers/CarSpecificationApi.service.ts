import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Injectable} from "@angular/core";
import {CarSpecification} from "../Models/CarSpecification";

@Injectable()

export class CarSpecificationApiService{
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {
  }

  getCarSpecifications(){
    return this.http.get<CarSpecification[]>(this.apiUrl + "/CarSpecification/GetCarSpecifications")
  }
}
