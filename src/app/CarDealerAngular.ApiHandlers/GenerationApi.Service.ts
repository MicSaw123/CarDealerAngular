import {HttpClient} from "@angular/common/http";
import {Generation} from "../Models/Generation";
import {environment} from "../../environments/environment.development";
import {Injectable} from "@angular/core";
import {catchError, Observable, throwError} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable()

export class GenerationApiService{
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getGenerationsByModelId(modelId: number){
    return this.http.get<Generation[]>(this.apiUrl + "/Generation/GetGenerationsByModelId?modelId=" + modelId);

  }
}
