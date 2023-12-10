import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";

@Injectable()

export class GenericApiHandlerService{
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {
  }

  getAll(api?: string){
    return this.http.get<any>(this.apiUrl+ api);
  }
}
