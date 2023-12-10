import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import {ManufacturerController} from "./CarDealerAngular.ApiHandlers/ManufacturerController";
import { SearchComponentComponent } from './search-component/search-component.component';
import {ModelApiService} from "./CarDealerAngular.ApiHandlers/ModelApi.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CarApiService} from "./CarDealerAngular.ApiHandlers/CarApi.service";
import {GenerationApiService} from "./CarDealerAngular.ApiHandlers/GenerationApi.Service";
import { HeaderComponent } from './header-component/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatSliderModule} from "@angular/material/slider";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {TransmissionApiService} from "./CarDealerAngular.ApiHandlers/TransmissionApi.service";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
    MatInputModule,
    MatSliderModule,
    MatDatepickerModule
  ],
  providers: [ManufacturerController,
    ModelApiService,
    CarApiService,
    GenerationApiService,
    TransmissionApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
