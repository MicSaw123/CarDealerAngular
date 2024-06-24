export class SuccessResponseBase {
  IsSuccessful: boolean;
  CompletedAt: Date;

  constructor() {
    this.IsSuccessful = true;
    this.CompletedAt = new Date();
  }

  static CreateBaseResponse(): SuccessResponseBase {
    return new SuccessResponseBase();
  }
}

export class SuccessResponse<T> extends SuccessResponseBase {
  Result: T;

  constructor(result: T) {
    super();
    this.Result = result;
  }

  static CreateResponse<T>(result: T): SuccessResponse<T> {
    return new SuccessResponse<T>(result);
  }
}
