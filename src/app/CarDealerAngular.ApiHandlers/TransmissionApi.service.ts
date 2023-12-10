import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Transmission} from "../Models/Transmission";
import {Injectable} from "@angular/core";

@Injectable()

export class TransmissionApiService{
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {
  }

  getTransmissions(){
    return this.http.get<Transmission[]>(this.apiUrl + "/Transmission/GetTransmissions");
  }
}
