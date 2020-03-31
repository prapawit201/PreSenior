import baseaxios from "axios";

const axios = baseaxios.create({
  baseURL:
    process.env.NODE_ENV == "production"
      ? "http://localhost:5000/api"
      : "http://localhost:4000/api"
});

export default axios;
