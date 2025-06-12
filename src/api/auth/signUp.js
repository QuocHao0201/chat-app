import apiClient from "../apiClient";


export const signUp = async ({ phone, password, fullName, gender, dateOfBirth, email, authOTP }) => {
  const response = await apiClient.post("/auth/create/new-account", {
    phone,
    password,
    fullName,
    gender,
    dateOfBirth,
    email,
    authOTP, // ✅ Thêm dòng này
  });
  return response.data;
};
