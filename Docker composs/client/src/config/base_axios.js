import baseaxios from "axios";

const axios = baseaxios.create({
  baseURL:
    process.env.NODE_ENV == "production"
      ? "http://localhost:5000/api" //ถ้ารันไม่ไดเปลี่ยนเป็น backend / frontend
      : "http://localhost:4000/api"
});

export default axios;
