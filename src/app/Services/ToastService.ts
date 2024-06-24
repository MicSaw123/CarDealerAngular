import {ToastUtility} from "@syncfusion/ej2-notifications";
import {Injectable} from "@angular/core";
import {ToastComponent} from "@syncfusion/ej2-angular-notifications";
import {ErrorResponse} from "../Responses/ErrorResponse";

@Injectable()

export class ToastService{
  public toast?: ToastComponent;
  constructor() {
  }

  public warningToast(error: ErrorResponse){
    this.toast = ToastUtility.show(error.Message, "Warning") as ToastComponent;
  }
}
