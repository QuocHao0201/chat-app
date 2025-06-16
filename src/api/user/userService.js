import apiClient from "../apiClient";

class UserService {
  constructor() {
    this.apiClient = new apiClient();
  }

  async updateUserProfile(data) { //{state params} => body
    const response = await apiClient.put("/users/update/profile", data);
    return response.data;
  }
}

export default UserService;
