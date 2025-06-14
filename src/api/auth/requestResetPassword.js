import apiClient from "../apiClient";

// Gửi yêu cầu đặt lại mật khẩu (qua email)
export const requestResetPassword = async (email) => {
  const response = await apiClient.post('/auth/request-reset-password', {
    email,
  });
  return response.data;
};
