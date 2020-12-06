import axios from "axios";

export const fetchUrls = async <T>(urls: string[]) => {
  return await Promise.all(
    urls.map((url) => axios.get<T>(url).then((resp) => resp.data))
  );
};
