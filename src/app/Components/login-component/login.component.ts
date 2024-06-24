import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginDto} from "../../DataTransferObjects/Identity/LoginDto";
import {LoginToken} from "../../Models/Identity/LoginToken";
import {SuccessResponse} from "../../Responses/SuccessResponse";
import {ErrorResponse} from "../../Responses/ErrorResponse";
import {ToastService} from "../../Services/ToastService";
import {IdentityApiService} from "../../CarDealerAngular.ApiHandlers/Identity/IdentityApi.service";

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  Token = new LoginToken();

  constructor(private toastService: ToastService,
              private identityService: IdentityApiService
  ) {
  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'Email': new FormControl(null, [Validators.required]),
      'Password': new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  LoginUser(login: LoginDto){
    if(this.loginForm.valid) {
      this.identityService.Login(this.loginForm.value).subscribe(
        {
          next:(Token: SuccessResponse<LoginToken>) => localStorage.setItem('Token', Token.Result.Token),
          error:(err: ErrorResponse) => this.toastService.warningToast(err)
        }
      );
    }

  }
}
