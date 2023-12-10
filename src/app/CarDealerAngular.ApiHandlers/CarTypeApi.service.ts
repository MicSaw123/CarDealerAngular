import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {CarType} from "../Models/CarType";
import {Injectable} from "@angular/core";

@Injectable()

export class CarTypeApiService{
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {
  }

  getCarTypes(){
    return this.http.get<CarType[]>(this.apiUrl + "/CarType/GetCarTypes");
  }
}
