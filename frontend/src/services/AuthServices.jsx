import api from "./api"

const AuthService = {
  loginUser(data) {
    return api().post("/login", data);
  },
  registerUser(data) {
    return api().post("/register", data);
  },
  getUser() {
    return api().get('user');
  },
};

export default AuthService;