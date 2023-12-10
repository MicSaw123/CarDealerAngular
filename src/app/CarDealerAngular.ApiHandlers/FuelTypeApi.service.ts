import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Injectable} from "@angular/core";
import {FuelType} from "../Models/FuelType";

@Injectable()

export class FuelTypeApiService{
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {
  }

  getFuelTypes(){
    return this.http.get<FuelType[]>(this.apiUrl + "/FuelType/GetFuelTypes");
  }
}
