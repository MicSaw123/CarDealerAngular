import { HomeComponent } from './Components/home/home.component';
import { AppComponent } from './app.component';
import {RegisterComponent} from './Components/register-component/register.component';
import {AddressApiService} from "./CarDealerAngular.ApiHandlers/Address/AddressApi.service";
import {BaseApiRequestsService} from "./CarDealerAngular.ApiHandlers/GenericApiService/BaseApiRequests.service";
import {ToastService} from "./Services/ToastService";
import {AuthGuardService} from "./Services/AuthGuardService";
import {AuthService} from "./AuthGuard/AuthGuard";
import {TokenInterceptor} from "./TokenInterceptor/TokenInterceptor";
import {ImageApiService} from "./CarDealerAngular.ApiHandlers/Listings/ImageApi.service";
import { AddListingComponent } from './Components/add-listing-component/add-listing.component';
import {SearchComponent} from './Components/search-component/search.component';
import {LoginComponent} from './Components/login-component/login.component';
import {ModelApiService} from "./CarDealerAngular.ApiHandlers/Cars/ModelApi.service";
import {GenerationApiService} from "./CarDealerAngular.ApiHandlers/Cars/GenerationApi.service";
import { HeaderComponent } from './Components/header-component/header.component';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {ToastModule} from "@syncfusion/ej2-angular-notifications";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatSliderModule} from "@angular/material/slider";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {Routes, RouterOutlet, RouterLink, RouterModule} from "@angular/router";
import {EngineApiService} from "./CarDealerAngular.ApiHandlers/Cars/EngineApi.service";
import {ListingApiService} from "./CarDealerAngular.ApiHandlers/Listings/ListingApi.service";
import {PreviouslyDamagedApiService} from "./CarDealerAngular.ApiHandlers/Cars/PreviouslyDamagedApi.service";
import { BrowserModule } from '@angular/platform-browser';
import {IdentityApiService} from "./CarDealerAngular.ApiHandlers/Identity/IdentityApi.service";
import { ListingListComponent } from './Components/listing-list/listing-list.component';
import { ListingComponent } from './Components/listing-list/listing-component/listing/listing.component';
import {GetBasicPropertiesApiService} from "./CarDealerAngular.ApiHandlers/GetBasicProperties/GetBasicPropertiesApi.service";
import { ListingPageComponent } from './Components/listing-page-component/listing-page/listing-page.component';
import {ProfileManagementComponent} from "./Components/profile-managament/profile-management.component";
import {UpdateListingComponent} from "./Components/update-listing-component/update-listing.component";
import {GetListingDtoResolver} from "./Resolvers/GetListingDtoResolver";
import {BasicPropertiesResolver} from "./Resolvers/BasicPropertiesResolver";
import { CommonModule } from '@angular/common';
import { CarcolorComponent } from './Components/carcolor/carcolor.component';
import {CarColorApiService} from "./CarDealerAngular.ApiHandlers/Cars/CarColorApi.service";
import { ManageListingsComponent } from './Components/profile-managament/manage-listings/manage-listings.component';
import { ManageProfileComponent } from './Components/profile-managament/manage-profile/manage-profile/manage-profile.component';
import { InactiveListingsComponent } from './Components/profile-managament/manage-listings/inactive-listings/inactive-listings.component';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { allIcons } from 'ngx-bootstrap-icons';
import {AccountTypeApiService} from "./CarDealerAngular.ApiHandlers/Identity/AccountTypeApi.service";

const routes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'add-listing', component: AddListingComponent, canActivate: [AuthService], resolve:
      {basicProperties: BasicPropertiesResolver}},
  {path: 'listing/:id', component: ListingPageComponent},
  {path: 'addCarColor', component: CarcolorComponent},
  {path: 'profile/:Token', component: ProfileManagementComponent, canActivate: [AuthService]},
  {path: 'update-listing/:id', component: UpdateListingComponent, canActivate: [AuthService], resolve:
      {resolvedListing: GetListingDtoResolver, basicProperties: BasicPropertiesResolver}},
  {path: '**', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AddListingComponent,
    ListingListComponent,
    ListingComponent,
    ListingPageComponent,
    ProfileManagementComponent,
    UpdateListingComponent,
    CarcolorComponent,
    ManageListingsComponent,
    ManageProfileComponent,
    InactiveListingsComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
    MatInputModule,
    MatSliderModule,
    MatDatepickerModule,
    RouterOutlet,
    RouterLink,
    BrowserModule,
    ReactiveFormsModule,
    NgxBootstrapIconsModule.pick(allIcons)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    ModelApiService,
    GenerationApiService,
    AddressApiService,
    BaseApiRequestsService,
    ToastService,
    AuthGuardService,
    AuthService,
    ImageApiService,
    EngineApiService,
    ListingApiService,
    PreviouslyDamagedApiService,
    IdentityApiService,
    GetBasicPropertiesApiService,
    GetListingDtoResolver,
    BasicPropertiesResolver,
    CarColorApiService,
    AccountTypeApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
