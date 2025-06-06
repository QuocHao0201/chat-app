import apiClient from "../apiClient";

// Hàm login với body
export const login = async (phone, password ) => {
  const response = await apiClient.post('/auth/login', {
    phone,
    password,
  });
  return response.data;
};
