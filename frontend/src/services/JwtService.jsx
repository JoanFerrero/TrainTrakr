const JwtService = {
  destroyToken() {
    localStorage.removeItem("token")
  },
  getToken(){
    return localStorage.getItem("token")
},
}

export default JwtService;