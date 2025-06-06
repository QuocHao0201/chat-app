import apiClient from "../apiClient";

// Hàm signUp với body
export const signUp = async ({ phone, password, fullName, gender, dateOfBirth, email }) => {
  const response = await apiClient.post("/auth/create/new-account", {
    phone,
    password,
    fullName,
    gender,
    dateOfBirth,
    email,
  });
  return response.data;
};
