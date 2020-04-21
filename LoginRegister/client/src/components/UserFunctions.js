import axios from "axios";
export const register = (newUser) => {
  return axios
    .post("users/register", {
      fName: newUser.fName,
      lName: newUser.lName,
      username: newUser.username,
      password: newUser.password,
      position: newUser.position,
      enterpriseId: newUser.enterpriseId,
    })
    .then((res) => {
      console.log("Registered");
    });
};

export const login = (user) => {
  return axios
    .post("users/login", {
      username: user.username,
      password: user.password,
    })
    .then((res) => {
      localStorage.setItem("usertoken", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
