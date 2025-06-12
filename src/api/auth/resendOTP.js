import apiClient from "../apiClient";

// Gửi lại OTP đến email
export const resendOTP = async (email) => {
  const response = await apiClient.post('/auth/resend-otp', { email });
  return response.data;
};
