import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Car} from "../Models/Car";
import {Injectable} from "@angular/core";

@Injectable()

export class CarApiService{
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {
  }

  getCars(){
    return this.http.get<Car[]>(this.apiUrl + "/Car/GetCars");
  }
}
