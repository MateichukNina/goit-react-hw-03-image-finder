import axios from "axios";
axios.defaults.baseURL = `https://pixabay.com/api/`;
 const API_KEY = '38015405-7546e421a34b4b2277fcb8cdc';

 export const fetchImage = async (query,page) => {
  const response = await axios.get("/", {
    params: {
      key: API_KEY,
      q: query,
      page: page,
      per_page: 12,
    },
  });


  return response.data;

}