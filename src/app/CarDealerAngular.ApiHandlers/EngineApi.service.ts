import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Injectable} from "@angular/core";
import {Engine} from "../Models/Engine";

@Injectable()

export class EngineApiService{
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {
  }

  getEngines(){
    return this.http.get<Engine[]>(this.apiUrl + "/Engine/GetEngines")
  }
}
