import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AddressApiService} from "../../CarDealerAngular.ApiHandlers/Address/AddressApi.service";
import {SuccessResponse} from "../../Responses/SuccessResponse";
import {ErrorResponse} from "../../Responses/ErrorResponse";
import {ToastService} from "../../Services/ToastService";
import {IdentityApiService} from "../../CarDealerAngular.ApiHandlers/Identity/IdentityApi.service";
import {CityDto} from "../../DataTransferObjects/Address/CityDto";
import {CountryDto} from "../../DataTransferObjects/Address/CountryDto";
import {AccountTypeDto} from "../../DataTransferObjects/Identity/AccountTypeDto";
import {AccountTypeApiService} from "../../CarDealerAngular.ApiHandlers/Identity/AccountTypeApi.service";
import {RegisterDto} from "../../DataTransferObjects/Identity/RegisterDto";

@Component({
  selector: 'app-register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm!: FormGroup;
  countryId = 0;
  cityId = 0;
  isSubmitted = false;
  accountTypeId = 0;
  countries: CountryDto[] = [];
  cities: CityDto[] = [];
  accountTypes: AccountTypeDto[] = [];
  zipCode?: string;
  constructor(private addressService: AddressApiService,
              private toastService: ToastService,
              private identityService: IdentityApiService,
              private accountTypeService: AccountTypeApiService) {
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'Email': new FormControl(null,[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")] ),
      'Username': new FormControl(null, [Validators.required]),
      'PhoneNumber': new FormControl(null, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
      'Password': new FormControl(null, [Validators.required]),
      'ConfirmedPassword': new FormControl(null, [Validators.required]),
      'Country': new FormControl(null, [Validators.required]),
      'CityId': new FormControl(null, [Validators.required]),
      'ZipCode': new FormControl(null, [Validators.required]),
      'AccountTypeId': new FormControl(null, [Validators.required]),

    });
    this.addressService.GetCountries().subscribe({
      next:(response) => this.handleGetCountries(response)
    });
    this.accountTypeService.GetAccountTypes().subscribe({
      next:(response) => this.handleGetAccountTypes(response),
      error:(error: ErrorResponse) => console.log(error)
    })
  }

  RegisterUser(){
    let registerDto: RegisterDto  = {
      Username: this.registerForm.get("Username")?.value,
      Password: this.registerForm.get("Password")?.value,
      ConfirmedPassword: this.registerForm.get("ConfirmedPassword")?.value,
      PhoneNumber: this.registerForm.get("PhoneNumber")?.value,
      CityId: this.cityId,
      Email: this.registerForm.get("Email")?.value,
      AccountTypeId: this.accountTypeId
    }
    this.isSubmitted = true;
    console.log(registerDto)
    if(this.registerForm.valid){
      this.identityService.Register(registerDto).subscribe({
        next:(response) =>{
          console.log(response);
      },
        error:(response: ErrorResponse) =>
          this.toastService.warningToast(response)
        }
        );
    }
  }

  onSelectedCountry(countryId: number){
    this.addressService.GetCitiesByCountryId(countryId).subscribe({
      next:(response) => this.handleGetCitiesByCountryId(response)
    });
    this.registerForm.get('ZipCode')?.reset();
    this.registerForm.get('CityId')?.reset(this.cityId = 0);
  }

  getZipCode(cityId: number){
    this.zipCode = this.cities.at(cityId - 1)?.ZipCode;
  }

  private handleGetAccountTypes(response: SuccessResponse<AccountTypeDto[]>){
    this.accountTypes = response.Result;
  }

  private handleGetCountries(response: SuccessResponse<CountryDto[]>){
    this.countries = response.Result;
  }

  private handleGetCitiesByCountryId(response: SuccessResponse<CityDto[]>){
    this.cities = response.Result;
  }

}
