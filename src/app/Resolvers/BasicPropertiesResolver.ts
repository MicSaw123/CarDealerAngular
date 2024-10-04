import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import {GetBasicPropertiesDto} from "../DataTransferObjects/Cars/GetBasicPropertiesDto";
import { Observable } from "rxjs";
import {
  GetBasicPropertiesApiService
} from "../CarDealerAngular.ApiHandlers/GetBasicProperties/GetBasicPropertiesApi.service";
import { Injectable } from "@angular/core";

@Injectable()

export class BasicPropertiesResolver implements Resolve<GetBasicPropertiesDto>{
 constructor(private getBasicPropertiesDtoService: GetBasicPropertiesApiService){
 }

 resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<GetBasicPropertiesDto>{
   return this.getBasicPropertiesDtoService.GetBasicProperties();
 }
}
