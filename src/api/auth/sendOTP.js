import apiClient from "../apiClient";

// Gửi OTP đến email
export const sendOTP = async (email) => {
  const response = await apiClient.post('/auth/send-otp', { email });
  return response.data;
};
