import {HttpStatusCode} from "@angular/common/http";

export class ErrorResponse{
  public StatusCode?: HttpStatusCode;

  public Message: string = ""

  constructor(statusCode: HttpStatusCode, message: string) {
    this.StatusCode = statusCode;
    this.Message = message;
  }
  static CreateResponse(message: string, statusCode: HttpStatusCode) : ErrorResponse
  {
    return new ErrorResponse(statusCode, message);
  }
}
