import { getHeaders } from "../Utils/functions";

const url = process.env.REACT_APP_URL_ENDPOINT;

export const getMovies = async () => {
    const  response = await fetch(`${url}/movies`, {
        method: 'GET',
        headers: getHeaders()
    })
    const data = await response.json();
    if (data.success) {
      return data.data;
    } else {
      return [];
    }
}

export const getMovie = async (id) => {
    const  response = await fetch(`${url}/movies/${id}`, {
        method: 'GET',
        headers: getHeaders()
    })
    const data = await response.json();
    if (data.success) {
      return data.data;
    } else {
      return [];
    }
}

