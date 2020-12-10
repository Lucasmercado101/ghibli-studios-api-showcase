import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://ghibliapi.herokuapp.com"
  // baseURL: "https://cors-anywhere.herokuapp.com/https://ghibliapi.herokuapp.com"
});

export const getFilms = function () {
  return axiosInstance.get<Films>("/films").then((resp) => resp.data);
};

export const getPeople = function () {
  return axiosInstance.get<People>("/people").then((resp) => resp.data);
};

export const getSpeciesByID = function (urlWithId: string) {
  return axiosInstance.get<Species>(urlWithId).then((resp) => resp.data);
};

// -----------------------------------

export const fetchUrls = async <T>(urls: string[]) => {
  return await Promise.all(
    urls.map((url) => axios.get<T>(url).then((resp) => resp.data))
  );
};
