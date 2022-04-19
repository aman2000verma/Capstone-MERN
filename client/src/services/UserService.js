import axios from "axios";
const USER_BASE_URL = "http://localhost:3000/users";
const headers = {
  "Content-Type": "application/json",
  Authorization: "Token " + localStorage.getItem("token")
};

class UserService {
  loginUser(credentials) {
    return axios.post(USER_BASE_URL + "/login", credentials);
  }
  getUser() {
    return axios.get(USER_BASE_URL, { headers: headers });
  }
  postUser(users) {
    return axios.post(USER_BASE_URL, users, { headers: headers });
  }
  deleteUser(id) {
    return axios.delete(USER_BASE_URL + "/" + id, { headers: headers });
  }
}

export default new UserService();
