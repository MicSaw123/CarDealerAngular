import { Component, Input } from '@angular/core';
import {UserInfoDto} from "../../../../DataTransferObjects/Identity/UserInfoDto";
import {IdentityApiService} from "../../../../CarDealerAngular.ApiHandlers/Identity/IdentityApi.service";
import {ErrorResponse} from "../../../../Responses/ErrorResponse";

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.css']
})
export class ManageProfileComponent {
  @Input() userInfo: UserInfoDto = new UserInfoDto();
  newPasswordConfirmation = "";
  updatePasswordVisibility = false;
  currentPasswordVisibility = false;
  confirmNewPasswordVisibility = false;

  constructor(private identityService: IdentityApiService) {
  }

  UpdateAccountDetails(UserInfoDto: UserInfoDto) {
    this.identityService.UpdateAccountDetails(UserInfoDto).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (response: ErrorResponse) => {
        console.log(response)
      }
      }
    )
  }

  toggleUpdatedPasswordVisibility(){
    this.updatePasswordVisibility = !this.updatePasswordVisibility;
  }

  toggleConfirmNewPasswordVisibility(){
    this.confirmNewPasswordVisibility = !this.confirmNewPasswordVisibility;
  }

  toggleCurrentPasswordVisibility(){
    this.currentPasswordVisibility = !this.currentPasswordVisibility;
  }
}
