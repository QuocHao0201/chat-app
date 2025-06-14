import apiClient from "../apiClient";

class AuthService {
  constructor() {
    this.apiClient = apiClient;
  }

  async login(phone, password) {
    const response = await apiClient.post("/auth/login", { phone, password });
    return response.data;
  }

  async signUp({
    phone,
    password,
    fullName,
    gender,
    dateOfBirth,
    email,
    authOTP,
  }) {
    const response = await apiClient.post("/auth/create/new-account", {
      phone,
      password,
      fullName,
      gender,
      dateOfBirth,
      email,
      authOTP,
    });
    return response.data;
  }

  async requestResetPassword(email) {
    const response = await apiClient.post("/auth/request-reset-password", {
      email,
    });
    return response.data;
  }

  async resendOTP(email) {
    const response = await apiClient.post("/auth/resend-otp", { email });
    return response.data;
  }

  async sendOTP(email) {
    const response = await apiClient.post("/auth/send-otp", { email });
    return response.data;
  }

  async verifyOTP(email, otp) {
    const response = await apiClient.post("/auth/verify-otp", { email, otp });
    return response.data;
  }
}

export default AuthService;
