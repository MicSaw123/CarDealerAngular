import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Manufacturer} from "../Models/Manufacturer";
import {environment} from "../../environments/environment";

@Injectable()

export class ManufacturerController{
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}


  GetManufacturers(){
    return this.http.get<Manufacturer[]>(this.apiUrl + "/Manufacturer/GetManufacturers");
  }
}
