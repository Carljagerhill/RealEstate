import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': '2a87f4a433mshe0c680af379cc35p14c3a8jsnf2985fbee4bd' ,
    },
  });
    
  return data;
}
 