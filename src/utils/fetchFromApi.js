import axios from 'axios';

const BASE_URL = "https://youtube-v31.p.rapidapi.com"
const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'db4ce556ccmsh2fb9d776be8772fp16e215jsn713012b02fd7',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromApi = async (url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  }