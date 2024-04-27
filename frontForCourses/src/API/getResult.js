import axios from "axios";

const getResult = (body) => {
  try {
    const URL = import.meta.env.VITE_URL;

    const result = axios.post(URL, body);
    return result;
  } catch (e) {
    return e;
  }
};

export default getResult;
