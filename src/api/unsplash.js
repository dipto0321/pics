import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID bb4a5602f82d0ce92894bff097bdaf2046fb37348f1650d9d86ece5df7ad4bbb"
  }
});
