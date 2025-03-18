class ApiError extends Error {
  constructor(
    statuCode,
    message = "Something went wrong",
    error = [],
    stack = ""
  ) {
    super(message);
    this.status = statuCode;
    this.message = message;
    this.data = null;
    this.success = false;
    this.error = error;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
