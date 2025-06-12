import apiClient from "../apiClient";

// Xác minh OTP qua email
export const verifyOTP = async (email, otp) => {
  const response = await apiClient.post('/auth/verify-otp', {
    email,
    otp,
  });
  return response.data;
};
