class ApiResponse {
    constructor(statuCode, message, data) {
      this.status = statuCode;
      this.message = message;
      this.data = data;
      this.success = statuCode >= 200 && statuCode < 300;
    }
  }
  export default ApiResponse;
  