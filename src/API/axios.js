import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "7c692e47b19ad547d8f0f39365b408f3",
    langudage: "ko-KR",
  },
});

export default instance;
