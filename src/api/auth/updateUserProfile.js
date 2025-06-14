import axios from "axios";

// Cập nhật thông tin người dùng (gửi kèm token)
export const updateUserProfile = async (data, token) => {
  try {
    const response = await axios.put(
      "http://localhost:3000/users/update/profile",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Lỗi không xác định" };
  }
};
