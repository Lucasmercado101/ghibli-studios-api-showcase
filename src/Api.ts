import axios from "axios";

export const getFilms = function () {
  return axios.get<Films>("/films").then((resp) => resp.data);
};

// -----------------------------------
export const fetchUrls = async <T>(urls: string[]) => {
  return await Promise.all(
    urls.map((url) => axios.get<T>(url).then((resp) => resp.data))
  );
};
