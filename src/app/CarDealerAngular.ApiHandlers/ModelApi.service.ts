import {Model} from "../Models/Model";
import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()

export class ModelApiService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getModelsByManufacturerId(manufacturerId: number) {
    return this.http.get<Model[]>(this.apiUrl + "/Model/GetModelsByManufacturerId?manufacturerId=" + manufacturerId);
  }
}
