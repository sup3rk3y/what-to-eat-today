import axios from "axios";

export default {
  getRecipes() {
    return axios
      .create({
        baseURL:
          "https://my-json-server.typicode.com/sup3rk3y/what-to-eat-today",
        withCredentials: false,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .get("/recipes");
  },
};
