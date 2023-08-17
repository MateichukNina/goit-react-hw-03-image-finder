import axios from "axios";
axios.defaults.baseURL = `https://pixabay.com/api/`;
 const API_KEY = '38015405-7546e421a34b4b2277fcb8cdc';

 export const fetchImage = async (query) => {
  const response = await axios.get("/", {
    params: {
      key: API_KEY,
      q: query,
    },
  });


  return response.data;

}