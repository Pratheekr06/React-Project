import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-30be9.firebaseio.com/",
});

export default instance;
