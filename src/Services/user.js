import { getHeaders } from "../Utils/functions";

const url = process.env.REACT_APP_URL_ENDPOINT;

export const getUser = async () => {
    const  response = await fetch(`${url}/users/validate`, {
        method: 'GET',
        headers: getHeaders()
    })
    const data = await response.json();
    if (data.success) {
      return data.data;
    } else {
      return null;
    }
}

export const login = async (email, password) => {
    const  response = await fetch(`${url}/users/login`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({email, password})
    })
    const data = await response.json();
    if (data.success) {
      const token = data.token;
      localStorage.setItem('token', token);
      return data.data;
    } else {
      return null;
    }
}


export const register = async (data) => {
    const  response = await fetch(`${url}/users/register`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(data)
    })
    const res = await response.json();
    if (res.success) {
      const token = res.token;
      localStorage.setItem('token', token);
      return res.data;
    } else {
      
      throw res.errors;
    }
}

export const addFavorite = async (movieId) => {
    const  response = await fetch(`${url}/users/favorite/add`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify({movieId})
    })
    const data = await response.json();
    if (data.success) {
      return data.data;
    } else {
      return null;
    }
}

export const removeFavorite = async (movieId) => {
    const  response = await fetch(`${url}/users/favorite/remove`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify({movieId})
    })
    const data = await response.json();
    if (data.success) {
      return data.data;
    } else {
      return null;
    }
}

export const listFavorites = async () => {
    const  response = await fetch(`${url}/users/favorite/list`, {
        method: 'GET',
        headers: getHeaders()
    })
    const data = await response.json();
    if (data.success) {
      return data.data;
    } else {
      return null;
    }
}

